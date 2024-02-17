import { Button } from "@/components/ui/button";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import PocketBase from 'pocketbase';
import { formatDistanceToNowStrict } from "date-fns"

export function VersionControl() {
  const pb = new PocketBase('https://itbt.pockethost.io');
  const [versionData, setVersionData] = useState<any>([])
  const auth = useAuth()
  useEffect(() => {
    async function getHistory() {
      const resultList = await pb.collection('history').getList(1, 7, {
      });
      console.log(resultList)
      setVersionData(resultList.items);
    }

    getHistory();
  }, [auth])

  return (
    <div className="h-screen p-2 bg-white">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold">History</h2>
        <Button className="text-sm" variant="ghost">
          «
        </Button>

      </div>
      <ScrollArea className="space-y-4">
        {versionData && versionData.map((version: any) => (
          <Card key={version.revNo} className="min-w-[300px] mt-2">
            <CardHeader>
              <CardTitle>v{version.revNo}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between">
                <span className="text-sm">{version.prompt}</span>
                <span className="text-sm">{formatDistanceToNowStrict(new Date(version.created))}</span>
              </div>
              <Avatar className="mt-4">
                <AvatarImage src={version.pfp} />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </CardContent>


          </Card>
        ))}
      </ScrollArea>
    </div>
  );
}
