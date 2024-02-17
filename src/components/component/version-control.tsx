import { Button } from "@/components/ui/button";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


export function VersionControl() {
  // Mock version data
  const versionData = [
    {
      version: "v2",
      description: "Added features",
      date: "3 days ago",
      userid: ""

    },
    {
      version: "v3",
      description: "Bug fixes",
      date: "2 days ago",
      userid: ""
    },
    {
      version: "v4",
      description: "Performance improvements",
      date: "1 day ago",
      userid: ""
    },
    {
      version: "v5",
      description: "Updated documentation",
      date: "12 hours ago",
      userid: ""
    },
    {
      version: "v6",
      description: "Refactored code",
      date: "8 hours ago",
      userid: ""
    }
  ];

  return (
    <div className="h-screen max-w-xs p-2 bg-white">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold">History</h2>
        <Button className="text-sm" variant="ghost">
          «
        </Button>

      </div>
      <ScrollArea className="space-y-4">
        {versionData.map((version, index) => (
          <Card key={index} className="min-w-[300px] mt-2">
            <CardHeader>
              <CardTitle>{version.version}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between">
                <span className="text-sm">{version.description}</span>
                <span className="text-sm">{version.date}</span>
              </div>
              <Avatar className="mt-4">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            </CardContent>
            

          </Card>
        ))}
      </ScrollArea>
    </div>
  );
}
