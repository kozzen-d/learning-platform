/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-img-element */
import { Card, CardAction, CardHeader, CardTitle } from "@/components/ui/card";
import Category from "@/types/Category";
import Link from "next/link";

import { FC } from "react";

interface Props {
  category: Category;
}

export const CategoryCard: FC<Props> = ({ category }) => {
  const { id, name, image } = category;
  return (
    <Card className="relative mx-auto w-[384]  pt-0">
      <img
        src={image || "https://www.shutterstock.com/image-vector/label-banner-that-have-yellow-600nw-2674835533.jpg"}
        alt={name}
        className="relative z-20 aspect-video w-full object-cover"
      />
      <CardHeader>
        <CardAction></CardAction>
        <CardTitle>
          <Link href={`/categories/${id}`} className="cursor-pointer">{name}</Link>
        </CardTitle>
      </CardHeader>
    </Card>
  );
};