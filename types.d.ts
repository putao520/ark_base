declare function require(mjs: string): any
declare function findDriver(driver_name: string): number | bigint
declare function align(address: number | bigint, n: number): number | bigint
declare namespace Memory{
    function u32(address: number | bigint, val: number): void
    function u32(address: number | bigint): number
    function u64(address: number | bigint, val: number): void
    function u64(address: number | bigint): number

    function f32(address: number | bigint, val: number): void
    function f32(address: number | bigint): number
    function f64(address: number | bigint, val: number): void
    function f64(address: number | bigint): number

    function u8Array(address: number | bigint, dst: Uint8Array): void
    function u8Array(address: number | bigint, size: number): Uint8Array

    function string(address: number | bigint, str: string): void
    function string(address: number | bigint): string

    function unicode(address: number | bigint, str: string): void
    function unicode(address: number | bigint): string

    function alloc(size: number): number | bigint
    function free(address: number | bigint): void

    function read(dst: number | bigint, src: number | bigint, size: number): void
    function write(dst: number | bigint, src: number | bigint, size: number): void
}
