import { defineField, defineType } from "sanity";

export const agent = defineType({
  name: "agent",
  title: "agent",
  type: "document",
  fields: [
    defineField({
      name: "Name",
      type: "string",
    }),
    defineField({
      name: "Age",
      type: "number",
      validation: (Rule) => Rule.min(1).max(100).error("age between 1-100"),
    }),
    defineField({
      name: "Supervision",
      type: "reference",
      to: [{ type: "author" }],
    }),

    defineField({
      name: "Description",
      type: "text",
      validation: (Rule) =>
        Rule.min(0).max(20).error("max character 20 chars").required(),
    }),
  ],
});
