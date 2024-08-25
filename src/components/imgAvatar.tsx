import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function ImgAvatar() {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/foshati.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}
