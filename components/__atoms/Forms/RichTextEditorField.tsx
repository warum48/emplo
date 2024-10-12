import { RichTextEditor, Link } from "@mantine/tiptap";
import { useEditor } from "@tiptap/react";

import StarterKit from "@tiptap/starter-kit";
import "@mantine/tiptap/styles.css";
import { FieldConfig } from "./FormTemplate_unused";
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

    return (
    <><div className='text-sm '>{ field.label}</div>
                            <RichTextEditor editor={editor} className="richText list-disc list-inside" >
                              
                               
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
                              <RichTextEditor.Content />
                            </RichTextEditor>
                            </>
    )

}