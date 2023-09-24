import { GetPostQuery } from "@/__generated__/graphql";
import { gql, useMutation } from "@apollo/client";
import { zodResolver } from "@hookform/resolvers/zod";
import he from "he";
import { useEffect, useId } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";
import Button from "./Button";
import Input from "./Input";
import InputError from "./InputError";

const CREATE_COMMENT = gql(`
  mutation CREATE_COMMENT (
    $commentOn: Int!
    $content: String!
    $author: String!
    $authorUrl: String!
    $authorEmail: String!
  ) {
    createComment(
      input: {
        commentOn: $commentOn
        content: $content
        author: $author
        authorUrl: $authorUrl
        authorEmail: $authorEmail
      }
    ) {
      success
      comment {
        id
        content
        author {
          node {
            name
          }
        }
      }
    }
  }
`);

const IdentitySchema = z.object({
  name: z.string().nonempty({ message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  website: z.string().optional(),
});

const FormSchema = IdentitySchema.extend({
  comment: z.string().nonempty({ message: "Comment is required" }),
  saveInfo: z.boolean().optional(),
});

type Props = {
  postDatabaseId: GetPostQuery["post"]["databaseId"];
};

type FormValues = z.infer<typeof FormSchema>;

const defaultValues: FormValues = {
  name: "",
  email: "",
  website: "",
  comment: "",
  saveInfo: false,
};

const BlogCommentForm = ({ postDatabaseId }: Props) => {
  const id = useId();

  const {
    reset,
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    defaultValues,
  });

  const [createComment, { loading }] = useMutation(CREATE_COMMENT, {
    onCompleted: (data) => {
      toast.success(
        "Comment submitted successfully. It will be reviewed by the admin before it is published."
      );
      reset(defaultValues);
    },
    onError(error) {
      toast.error(he.decode(error.message));
    },
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    const { comment, ...withoutComment } = data;
    if (data.saveInfo && typeof window !== "undefined") {
      localStorage.setItem("identity", JSON.stringify(withoutComment));
    }
    try {
      await createComment({
        variables: {
          commentOn: postDatabaseId,
          content: data.comment.trim(),
          author: data.name.trim(),
          authorUrl: data.website.trim(),
          authorEmail: data.email.trim(),
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    try {
      let value;
      value = localStorage.getItem("identity") || "";
      if (IdentitySchema.safeParse(JSON.parse(value)).success) {
        reset({
          ...defaultValues,
          ...JSON.parse(value),
        });
      }
    } catch (error) {
      console.log(error);
    }
  }, [reset]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='text-[36px] font-medium leading-[141.667%] text-black'>
        Leave a Reply
      </div>
      <p className='mt-[13px] text-jet'>
        Your email address will not be published. Required fields are marked *
      </p>
      <div className='mt-[37px] space-y-[10px]'>
        <Input
          {...register("comment")}
          error={!!errors?.comment?.message}
          label='Comment'
          isTextArea
          rows={10}
        />
        {errors.comment && <InputError>{errors.comment.message}</InputError>}
        <Input
          {...register("name")}
          error={!!errors?.name?.message}
          label='Name'
          requiredSymbol
        />
        {errors.name && <InputError>{errors.name.message}</InputError>}
        <Input
          {...register("email")}
          error={!!errors?.email?.message}
          label='Email'
          requiredSymbol
        />
        {errors.email && <InputError>{errors.email.message}</InputError>}
        <Input
          {...register("website")}
          error={!!errors?.website?.message}
          label='Website'
        />
        {errors.website && <InputError>{errors.website.message}</InputError>}
      </div>
      <div className='mt-[29px] flex items-center gap-x-[10px]'>
        <input
          {...register("saveInfo")}
          type='checkbox'
          id={id}
          className='h-[22px] w-[22px] shrink-0 rounded-[5px] border-gray'
        />
        <label
          htmlFor={id}
          className='text-[18px] font-medium leading-[183.333%]'
        >
          Save my name, email, and website in this browser for the next time I
          comment.
        </label>
      </div>

      <Button
        disabled={isSubmitting || loading}
        type='submit'
        className='mt-[40px] px-[36px] py-[10px]'
      >
        <span className='text-[24px] font-medium leading-[212.5%]'>
          {isSubmitting ? "Submitting..." : "Post Comment"}
        </span>
      </Button>
    </form>
  );
};

export default BlogCommentForm;
