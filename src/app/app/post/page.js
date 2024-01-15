"use client";
import { useState } from "react";

const Page = () => {
  const initialContent = "<p>Share your story</p>";

  // State to track editor content
  const [editorContent, setEditorContent] = useState(initialContent);

  // Function to handle content change and add extra empty element
  const handleContentChange = (editor) => {
    // Get the current content
    const content = editor.emitSerializedOutput();

    // Check if the content has changed
    if (content !== editorContent) {
      // Add an extra empty paragraph to the content
      const updatedContent = content + "<p>Write here</p>";

      // Update the state with the new content
      setEditorContent(updatedContent);

      // Update the editor content
      editor.emitSerializedOutput(updatedContent);
    }
  };

  return (
    <div className={`w-full flex flex-col justify-center items-center`}>
      <div className="px-0 md:px-3 w-fit md:w-[80%] lg:w-[70%] py-20 h-full">
        {/* <Dante
          bodyPlaceholder={"Share your Story on Bloggi"}
          onChange={handleContentChange}
          theme={defaultTheme}
          plugins={defaultPlugins}
        /> */}
        <Dante
          readOnly={false}
          plugins={defaultPlugins}
          bodyPlaceholder={"Share your Story on Bloggi"}
          editorProps={{
            handleKeyDown(view, event) {
              if (event.key === "Enter") {
                console.log("YES!!");
                return false;
              }
              console.log(view, event);
            },
            attributes: {
              class:
                "prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto focus:outline-none",
            },
            transformPastedText(text) {
              return text.toUpperCase();
            },
            handleDrop: function (view, event, slice, moved) {
              if (
                !moved &&
                event.dataTransfer &&
                event.dataTransfer.files &&
                event.dataTransfer.files[0]
              ) {
                let file = event.dataTransfer.files[0];
                let filesize = (file.size / 1024 / 1024).toFixed(4);

                const { schema } = view.state;
                const coordinates = view.posAtCoords({
                  left: event.clientX,
                  top: event.clientY,
                });

                let _URL = window.URL || window.webkitURL;

                if (file.type.startsWith("image/")) {
                  let image = new Image();
                  image.src = _URL.createObjectURL(file);
                  image.onload = function () {
                    const node = schema.nodes.ImageBlock.create({
                      src: image.src,
                    });
                    const transaction = view.state.tr.insert(
                      coordinates.pos,
                      node
                    );
                    view.dispatch(transaction);
                  };
                } else if (file.type.startsWith("video/")) {
                  const node = schema.nodes.VideoRecorderBlock.create({
                    url: _URL.createObjectURL(file),
                  });
                  const transaction = view.state.tr.insert(
                    coordinates.pos,
                    node
                  );
                  view.dispatch(transaction);
                } else if (file.type.startsWith("audio/")) {
                  const node = schema.nodes.AudioRecorderBlock.create({
                    url: _URL.createObjectURL(file),
                  });
                  const transaction = view.state.tr.insert(
                    coordinates.pos,
                    node
                  );
                  view.dispatch(transaction);
                } else {
                  const node = schema.nodes.FileBlock.create({
                    url: _URL.createObjectURL(file),
                  });
                  const transaction = view.state.tr.insert(
                    coordinates.pos,
                    node
                  );
                  view.dispatch(transaction);
                }
                return true;
              }

              return false; // not handled use default behaviour
            },
            ImageBlockConfig,
            EmbedBlockConfig,
            CodeBlockConfig,
          }}
        />
      </div>
    </div>
  );
};

export default Page;
