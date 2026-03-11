import { useState, useCallback } from "react";
import { getContent, saveContent, resetContent, defaultContent } from "@/lib/content";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Save, RotateCcw, Check, AlertTriangle } from "lucide-react";
import { Navbar } from "@/components/landing/Navbar";
import { toast } from "sonner";

const SECTION_LABELS = {
  navbar: "Navbar",
  hero: "Hero Section",
  problem: "Problem Statement",
  whatIs: "What is Partfind",
  howItWorks: "How It Works",
  opportunities: "Opportunities",
  whyPartfind: "Why Partfind",
  benefits: "Benefits",
  founderNote: "Founder Note",
  faq: "FAQ",
  cta: "Final CTA",
  footer: "Footer",
};

export default function EditPage() {
  const [content, setContent] = useState(getContent);
  const [activeSection, setActiveSection] = useState("hero");
  const [jsonText, setJsonText] = useState(() =>
    JSON.stringify(getContent().hero, null, 2)
  );
  const [jsonError, setJsonError] = useState(null);

  const handleSectionChange = useCallback(
    (section) => {
      setActiveSection(section);
      setJsonText(JSON.stringify(content[section] || {}, null, 2));
      setJsonError(null);
    },
    [content]
  );

  const handleJsonChange = (value) => {
    setJsonText(value);
    try {
      JSON.parse(value);
      setJsonError(null);
    } catch (e) {
      setJsonError(e.message);
    }
  };

  const handleSave = () => {
    try {
      const parsed = JSON.parse(jsonText);
      const updated = { ...content, [activeSection]: parsed };
      saveContent(updated);
      setContent(updated);
      setJsonError(null);
      toast.success(`${SECTION_LABELS[activeSection]} saved successfully!`);
    } catch (e) {
      setJsonError(e.message);
      toast.error("Invalid JSON. Fix errors before saving.");
    }
  };

  const handleReset = () => {
    const fresh = resetContent();
    setContent(fresh);
    setJsonText(JSON.stringify(fresh[activeSection] || {}, null, 2));
    setJsonError(null);
    toast.success("Content reset to defaults.");
  };

  const sectionKeys = Object.keys(SECTION_LABELS);

  return (
    <div className="min-h-screen bg-background text-foreground" data-testid="edit-page">
      <Navbar content={content} />

      <div className="pt-20 pb-8 px-4 md:px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="font-syne text-3xl md:text-4xl font-extrabold tracking-tighter uppercase" data-testid="edit-title">
                Content Editor
              </h1>
              <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider mt-1">
                Edit JSON to update landing page content
              </p>
            </div>
            <div className="flex gap-3">
              <Button
                variant="outline"
                className="rounded-none border-2 font-mono text-xs uppercase"
                onClick={handleReset}
                data-testid="reset-btn"
              >
                <RotateCcw className="mr-2 h-3 w-3" />
                Reset All
              </Button>
              <Button
                onClick={handleSave}
                disabled={!!jsonError}
                className="bg-[#CCFF00] text-black hover:bg-[#b8e600] rounded-none border-2 border-black font-bold text-xs uppercase"
                data-testid="save-btn"
              >
                <Save className="mr-2 h-3 w-3" />
                Save Section
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="lg:col-span-1">
              <div className="border-2 border-border bg-card p-2 sticky top-20">
                <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground px-3 py-2">
                  Sections
                </div>
                <div className="space-y-1">
                  {sectionKeys.map((key) => (
                    <button
                      key={key}
                      onClick={() => handleSectionChange(key)}
                      className={`w-full text-left px-3 py-2.5 font-outfit text-sm transition-colors duration-200 ${activeSection === key
                          ? "bg-blue-600 dark:bg-blue-500 text-white"
                          : "hover:bg-muted"
                        }`}
                      data-testid={`section-btn-${key}`}
                    >
                      {SECTION_LABELS[key]}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="border-2 border-border bg-card">
                <div className="flex items-center justify-between px-6 py-4 border-b-2 border-border">
                  <div className="flex items-center gap-3">
                    <span className="font-syne font-bold text-lg">
                      {SECTION_LABELS[activeSection]}
                    </span>
                    {jsonError ? (
                      <span className="flex items-center gap-1 text-red-500 font-mono text-xs">
                        <AlertTriangle className="h-3 w-3" />
                        Error
                      </span>
                    ) : (
                      <span className="flex items-center gap-1 text-green-500 font-mono text-xs">
                        <Check className="h-3 w-3" />
                        Valid
                      </span>
                    )}
                  </div>
                </div>

                <div className="p-4">
                  <Textarea
                    value={jsonText}
                    onChange={(e) => handleJsonChange(e.target.value)}
                    className="font-mono text-sm min-h-[500px] rounded-none border-2 border-border bg-zinc-950 text-green-400 resize-y focus-visible:ring-0 focus-visible:border-blue-600"
                    spellCheck={false}
                    data-testid="json-editor"
                  />
                  {jsonError && (
                    <div className="mt-3 p-3 border-2 border-red-500 bg-red-500/10 font-mono text-xs text-red-400" data-testid="json-error">
                      {jsonError}
                    </div>
                  )}
                </div>

                <Tabs defaultValue="preview" className="px-4 pb-4">
                  <TabsList className="rounded-none border-2 border-border bg-transparent h-auto p-0">
                    <TabsTrigger
                      value="preview"
                      className="rounded-none font-mono text-xs uppercase px-4 py-2 data-[state=active]:bg-muted"
                      data-testid="preview-tab"
                    >
                      Parsed Preview
                    </TabsTrigger>
                    <TabsTrigger
                      value="default"
                      className="rounded-none font-mono text-xs uppercase px-4 py-2 data-[state=active]:bg-muted"
                      data-testid="default-tab"
                    >
                      Default Values
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="preview" className="mt-4">
                    <pre className="font-mono text-xs text-muted-foreground bg-muted p-4 overflow-auto max-h-60 border-2 border-border" data-testid="parsed-preview">
                      {jsonError
                        ? "Fix JSON errors to see preview"
                        : JSON.stringify(JSON.parse(jsonText || "{}"), null, 2)}
                    </pre>
                  </TabsContent>
                  <TabsContent value="default" className="mt-4">
                    <pre className="font-mono text-xs text-muted-foreground bg-muted p-4 overflow-auto max-h-60 border-2 border-border" data-testid="default-preview">
                      {JSON.stringify(defaultContent[activeSection], null, 2)}
                    </pre>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}