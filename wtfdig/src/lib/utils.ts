export function getCircleMaskUrl(xPercent: number, yPercent: number, size: number) {
    const svg = `data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" height="100%" width="100%"><rect width="100%" height="100%" fill-opacity="0.5"/><circle cx="${xPercent}%" cy="${yPercent}%" r="${size}%" fill="black" /></svg>`
    return `url('${svg}')`;
}

export function getRectMaskUrl(xStart: number, xEnd: number, yStart: number, yEnd: number) {
    const svg = `data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" height="100%" width="100%"><rect width="100%" height="100%" fill-opacity="0.5"/><rect x="${xStart}%" y="${yStart}%" width="${xEnd - xStart}%" height="${yEnd - yStart}%" fill="black" /></svg>`
    return `url('${svg}')`;
}

export function getCircleMask(hPercent: number, vPercent: number, size: number) {
    return `radial-gradient(circle at ${hPercent}% ${vPercent}%, black ${size - 0.1}%, rgba(0, 0, 0, 0.4)  ${size}%)`;
}