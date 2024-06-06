import z from "zod";

const zStringRequired = z.string().min(1, "Required");
export const ZFeedback = z.object({
  email: z.string().email(),
  name: z.string(),
  subject: zStringRequired,
  message: zStringRequired,
});