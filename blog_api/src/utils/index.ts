export const parseRowDataPacket = (result: any[]) : any[] => {
    return Object.values(JSON.parse(JSON.stringify(result)))
}