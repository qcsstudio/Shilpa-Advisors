import { NextResponse } from 'next/server';
import connectMongo from '@/app/lib/mongodb';
import { Content } from '@/app/models/content';


export async function GET(req) {
    try {
        await connectMongo();

        const content = await Content.findOne({ type: 'pp' });
        if (!content) {
            return NextResponse.json({ success: false, error: 'Privacy policy not found' }, { status: 404 });
        }

        return NextResponse.json({
            success: true,
            message: 'Fetched',
            data: content,
        }, { status: 200 });
    } catch (error) {
        // Log the error to the server console for debugging
        console.error('Error fetching privacy policy:', error);
        return NextResponse.json({ success: false, error: 'Server error' }, { status: 500 });
    }
}
