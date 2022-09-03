import { Image, Text } from "@mantine/core";
import Link from "next/link";
import { FC } from "react";

type ContentsProps = {
  id?: number;
  title: string;
  description: string;
  createdAt: string;
};

export const ContentsPortion: FC<ContentsProps> = (props) => {
  return (
    <li key={props.id} className="list-none mt-[24px]">
      <Link href={`/blog/${props.id}`}>
        <a>
          <Text weight={500} size="lg">
            {props.title}
          </Text>
          <div className="my-1 overflow-hidden text-ellipsis text-sm line-clamp-2">
            {props.description}
          </div>
          <Text size="sm" className="text-[#909296]">{props.createdAt}</Text>
        </a>
      </Link>
    </li>
  );
};