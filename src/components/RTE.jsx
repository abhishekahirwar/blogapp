import React from 'react'
import { Editor } from "@tinymce/tinymce-react"
import { Controller } from "react-hook-form"

export default function RTE({
    name,
    control,
    label,
    defaultValue = ""
}) {
    return (
        <div className='w-full'>
            {label && <label className='inline-block mb-1 pl-1'>{label}</label>}
            <Controller
                name={name || "content"}
                control={control}
                render={({ field: { onChange } }) => (
                    <Editor
                        apiKey='jlpwp7dkaa9w6es822nfm1uaap1fpizy0zvyz7wustbyl9k8'
                        initialValue={defaultValue}
                        init={{
                            initialValue: 'defaultValue',
                            height: 500,
                            menubar: true,
                            plugins: [
                                'a11ychecker',
                                'advlist',
                                'advcode',
                                'advtable',
                                'autolink',
                                'checklist',
                                'markdown',
                                'lists',
                                'link',
                                'image',
                                'charmap',
                                'code',
                                'preview',
                                'anchor',
                                'searchreplace',
                                'visualblocks',
                                'powerpaste',
                                'fullscreen',
                                'formatpainter',
                                'insertdatetime',
                                'media',
                                'table',
                                'help',
                                'wordcount'
                            ],
                            toolbar: 'undo redo | blocks | image | casechange blocks | bold italic backcolor | forecolor | ' +
                                'alignleft aligncenter alignright alignjustify | ' +
                                'bullist numlist checklist outdent indent | removeformat | a11ycheck code table help',

                            content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
                        }}
                        onEditorChange={onChange}
                    />
                )}
            />
        </div>
    )
}
