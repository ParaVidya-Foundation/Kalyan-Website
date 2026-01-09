"use client";

import Image from "next/image";
import { ComponentProps } from "react";

interface OptimizedImageProps extends Omit<ComponentProps<typeof Image>, "objectFit"> {
  objectFit?: "contain" | "cover" | "fill" | "none" | "scale-down";
  priority?: boolean;
  loading?: "lazy" | "eager";
}

export default function OptimizedImage({
  objectFit = "cover",
  priority = false,
  loading = "lazy",
  ...props
}: OptimizedImageProps) {
  return (
    <Image
      {...props}
      style={{ objectFit }}
      priority={priority}
      loading={loading}
    />
  );
}

