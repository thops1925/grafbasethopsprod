import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";


cloudinary.config({
    cloud_name: process.env.NEXT_PUBLIC_cloud_name,
    api_key: process.env.NEXT_PUBLIC_api_key,
    api_secret: process.env.NEXT_PUBLIC_api_secret
});

export async function POST(request: Request) {
    const { path } = await request.json();

    if (!path) {
        return NextResponse.json({ message: "Image path is required" }, { status: 400 });
    }

    try {
        const options = {
            use_filename: true,
            unique_filename: false,
            overwrite: true,
            transformation: [{ width: 1000, height: 752, crop: "scale" }],
        };

        const result = await cloudinary.uploader.upload(path, options);

        return NextResponse.json(result, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Failed to upload image on Cloudinary" }, { status: 500 });
    }
}