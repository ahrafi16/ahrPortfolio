import { projects as localProjects } from "@/data/projects";

const API_URL = "https://portfolio-dashboard-three-lac.vercel.app/api/projects";

export async function getProjects() {
    try {
        const res = await fetch(API_URL, {
            next: { revalidate: 60 },
            signal: AbortSignal.timeout(5000),
        });
        if (!res.ok) throw new Error(`API responded with ${res.status}`);

        const data = await res.json();
        if (!Array.isArray(data)) throw new Error("Unexpected API response");

        return data.length > 0 ? data : localProjects;;
    } catch (error) {
        console.error("Projects API failed, using local data:", error.message);
        return localProjects;
    }
}