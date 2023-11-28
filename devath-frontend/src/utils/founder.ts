import { readFileSync, readdirSync } from "fs";
import matter from "gray-matter";
import path from "path";

export type founderDataType = {
    name: string
    content: string
    nickname: string
    position: string
    quote: string
    linkedIn?: string;
    facebook?: string;
    twitter?: string;
    instagram?: string;
    website?: string;
}

const postsDirectory = path.join(process.cwd(), "/public/founders");

export function getAllFounders() {
    const fileNames = readdirSync(postsDirectory)
    return fileNames.filter(file => file.includes(".md")).map((file) => ({
        params: {
            name: file.replace(/\.md$/, '')
        }
    }))
}

export function getAllFoundersData() {
    const fileNames = readdirSync(postsDirectory)
    const allFoundersData = fileNames.filter(file => file.includes(".md")).map((file) => {
        const fullPath = path.join(postsDirectory, `${file}`)
        const fileContents = readFileSync(fullPath, 'utf-8')
        const matterResult = matter(fileContents)
        return {
            name: file.replace(/\.md$/, ""),
            content: matterResult.content,
            ...matterResult.data
        } as founderDataType
    })

    console.log(allFoundersData)
    return allFoundersData
}

export function getFounderData(name: string) {
    const fullPath = path.join(postsDirectory, `${name}.md`)
    const fileContents = readFileSync(fullPath, 'utf-8')
    const matterResult = matter(fileContents)

    return {
        name,
        content: matterResult.content,
        ...matterResult.data
    } as founderDataType
}