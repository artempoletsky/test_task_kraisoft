"use client";

import { Button, TextInput, Textarea } from "@mantine/core";
import css from "./feedback.module.scss";

export default function Page() {


  return <div>
    Here you can send us feedback.
    <form action="#" className={css.form}>
      <TextInput label="Your name" />
      <TextInput required label="E-mail" />
      <TextInput required label="Subject" />
      <Textarea required resize="vertical" label="Message" />
      <Button className={css.submit}>Send feedback</Button>
    </form>
  </div>;
}