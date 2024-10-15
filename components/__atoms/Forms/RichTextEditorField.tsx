import { RichTextEditor, Link } from "@mantine/tiptap";
import { useEditor } from "@tiptap/react";

import StarterKit from "@tiptap/starter-kit";
import "@mantine/tiptap/styles.css";
import { FieldConfig } from "./FormTemplate_unused";
import { useEffect } from "react";
//import { FieldConfig } from "@/components/_dashboard/profiles/create/FormTemplate";

type TProps = {
    field: FieldConfig;
    form:any;
}

export const ReachTextEditorField = ({field, form}:TProps) => {

    const editor = useEditor({
        extensions: [
          StarterKit,
        //  Underline,
          Link,
       //   Superscript,
       //   SubScript,
       //   Highlight,
       //   TextAlign.configure({ types: ['heading', 'paragraph'] }),
        ],
        onUpdate(props) {
          form.setFieldValue(field.name, props.editor.getHTML());
          console.log(props.editor.getHTML());
        },
       // content,
      });

      useEffect(() => {
        console.log("form.values[field.name]", form.values[field.name]);
        if (form.values[field.name]) {
          editor?.commands.setContent(form.values[field.name]);
        }
      }, [form.values[field.name]]);

    return (
    <><div className='text-sm '>{ field.label}</div>
                            <RichTextEditor editor={editor} className="richText list-disc list-inside bg-customGray-950" >
                              
                               
                              <RichTextEditor.Toolbar sticky stickyOffset={60}  {...form.getInputProps(field.name)} >
                                <RichTextEditor.ControlsGroup>
                                  <RichTextEditor.Bold />
                                  <RichTextEditor.Italic />
                                {/*}  <RichTextEditor.Underline />
                                  <RichTextEditor.Strikethrough />
                                 
                                  <RichTextEditor.Highlight />
                                  <RichTextEditor.Code /> 
                                   <RichTextEditor.ClearFormatting />
                                  */}

                                  <RichTextEditor.BulletList />
          <RichTextEditor.OrderedList />

         
                                </RichTextEditor.ControlsGroup>
                              </RichTextEditor.Toolbar>
                              <RichTextEditor.Content className="[&>div>div]:!p-3 text-sm ^leading-6 text-[--mantine-color-text] leading-[--mantine-line-height] bg-customGray-950" />
                            </RichTextEditor>
                            </>
    )

}