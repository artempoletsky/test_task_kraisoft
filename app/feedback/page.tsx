"use client";

import { Button, TextInput, Textarea } from "@mantine/core";
import css from "./feedback.module.scss";
import { useForm, zodResolver } from "@mantine/form";
import { ZFeedback } from "./schemas";

export default function Page() {
  const form = useForm({
    // mode: "uncontrolled",
    initialValues: {
      email: "",
      name: "",
      subject: "",
      message: "",
    },
    validate: zodResolver(ZFeedback),
  });

  return <div>
    Here you can send us feedback.
    <form onSubmit={form.onSubmit((values) => {
      alert("Done!");
      form.reset();
    })} action="#" className={css.form}>
      <TextInput {...form.getInputProps("name")} label="Your name" />
      <TextInput {...form.getInputProps("email")} required label="E-mail" />
      <TextInput {...form.getInputProps("subject")} required label="Subject" />
      <Textarea {...form.getInputProps("message")} required resize="both" label="Message" />
      <Button type="submit" className={css.submit}>Send feedback</Button>
    </form>
  </div>;
}