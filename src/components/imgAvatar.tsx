import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface ImgAvatarProps {
  avatarUrl: string | null;
  fullName: string;
}

export function ImgAvatar({ avatarUrl, fullName }: ImgAvatarProps) {
  return (
    <Avatar>
      <AvatarImage src={avatarUrl ?? undefined} alt={fullName} />
      <AvatarFallback>{fullName[2]}</AvatarFallback>
    </Avatar>
  );
}
