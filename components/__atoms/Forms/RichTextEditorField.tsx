import { RichTextEditor, Link } from "@mantine/tiptap";
import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import "@mantine/tiptap/styles.css";
import { FieldConfig } from "./FormTemplate_unused";
import { useEffect } from "react";
import { JSONViewer } from "../JSONViewer/JSONViewr";

type TProps = {
  field: FieldConfig;
  form: any;
};

export const ReachTextEditorField = ({ field, form }: TProps) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Link,
    ],
    content: form.values[field.name] || "", // Set initial content from form values
    onUpdate(props) {
      form.setFieldValue(field.name, props.editor.getHTML()); // Sync editor content with form
      console.log("Editor Content:", props.editor.getHTML());
    },
  });

  // Ensure the editor content is set when form values change
  useEffect(() => {
    if (editor && form.values[field.name] && editor.getHTML() !== form.values[field.name]) {
      editor.commands.setContent(form.values[field.name]);
      console.log("Set content to editor:", form.values[field.name]);
    }
  }, [form.values[field.name], editor]);

  return (
    <>
      <div className="text-sm">{field.label}</div>
      <RichTextEditor
        editor={editor}
        className="richText list-inside list-disc"
        key={"k" + form.values[field.name]}
      >
        <RichTextEditor.Toolbar
          sticky
          stickyOffset={60}
          {...form.getInputProps(field.name)}
        >
          <RichTextEditor.ControlsGroup>
            <RichTextEditor.Bold />
            <RichTextEditor.Italic />
            <RichTextEditor.BulletList />
            <RichTextEditor.OrderedList />
          </RichTextEditor.ControlsGroup>
        </RichTextEditor.Toolbar>
        <RichTextEditor.Content
          key={form.values[field.name]}
          className="^leading-6 text-sm leading-[--mantine-line-height] text-[--mantine-color-text] [&>div>div]:dark:!bg-customGray-950 [&>div>div]:!p-3"
        />
      </RichTextEditor>
     
    </>
  );
};


{
  /*
  
   <JSONViewer data={form.values[field.name]} />
      <JSONViewer data={editor?.getHTML()} />
  
  
  
  <RichTextEditor.Underline />
                                  <RichTextEditor.Strikethrough />
                                 
                                  <RichTextEditor.Highlight />
                                  <RichTextEditor.Code /> 
                                   <RichTextEditor.ClearFormatting />
                                  */
}
