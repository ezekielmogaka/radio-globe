declare module "seek-bzip" {
  export function decode(buffer: Buffer, maxSize?: number): Buffer;
}
