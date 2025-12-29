import * as React from "react";
import { Bold, List, Type } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./button";
import { Textarea } from "./textarea";

export interface RichTextEditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  rows?: number;
}

const RichTextEditor = React.forwardRef<HTMLDivElement, RichTextEditorProps>(
  ({ value, onChange, placeholder, className, rows = 6 }, ref) => {
    const textareaRef = React.useRef<HTMLTextAreaElement>(null);

    const insertFormatting = (format: "bold" | "paragraph" | "list") => {
      const textarea = textareaRef.current;
      if (!textarea) return;

      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const selectedText = value.substring(start, end);

      let newText = value;
      let cursorPosition = end;

      switch (format) {
        case "bold":
          if (selectedText) {
            newText = value.substring(0, start) + `**${selectedText}**` + value.substring(end);
            cursorPosition = end + 4;
          } else {
            newText = value.substring(0, start) + `**texte en gras**` + value.substring(end);
            cursorPosition = start + 2;
          }
          break;
        case "paragraph":
          newText = value.substring(0, end) + "\n\n" + value.substring(end);
          cursorPosition = end + 2;
          break;
        case "list":
          if (selectedText) {
            const lines = selectedText.split("\n").map(line => `• ${line}`).join("\n");
            newText = value.substring(0, start) + lines + value.substring(end);
            cursorPosition = start + lines.length;
          } else {
            newText = value.substring(0, end) + "\n• " + value.substring(end);
            cursorPosition = end + 3;
          }
          break;
      }

      onChange(newText);
      
      // Restore focus and cursor position
      setTimeout(() => {
        textarea.focus();
        textarea.setSelectionRange(cursorPosition, cursorPosition);
      }, 0);
    };

    return (
      <div ref={ref} className={cn("space-y-2", className)}>
        {/* Toolbar */}
        <div className="flex items-center gap-1 p-1 rounded-lg border border-border bg-muted/50">
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={() => insertFormatting("bold")}
            className="h-8 px-2 gap-1.5"
            title="Gras"
          >
            <Bold className="h-4 w-4" />
            <span className="text-xs hidden sm:inline">Gras</span>
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={() => insertFormatting("paragraph")}
            className="h-8 px-2 gap-1.5"
            title="Nouveau paragraphe"
          >
            <Type className="h-4 w-4" />
            <span className="text-xs hidden sm:inline">Paragraphe</span>
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={() => insertFormatting("list")}
            className="h-8 px-2 gap-1.5"
            title="Liste à puces"
          >
            <List className="h-4 w-4" />
            <span className="text-xs hidden sm:inline">Liste</span>
          </Button>
        </div>

        {/* Text Area */}
        <Textarea
          ref={textareaRef}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          rows={rows}
          className="resize-none"
        />

        {/* Helper text */}
        <p className="text-xs text-muted-foreground">
          Utilisez **texte** pour le gras. Les sauts de ligne créent des paragraphes.
        </p>
      </div>
    );
  }
);

RichTextEditor.displayName = "RichTextEditor";

export { RichTextEditor };
