import BlogGrid from '@/app/Components/Blog/BlogGrid';
import BreadCumb from '@/app/Components/Common/BreadCumb';
import React from 'react';

const page = () => {

    return (
        <div>
            <BreadCumb
                bgImg="/assets/images/resource/inner-bg.jpg"
                subTitle="Blog Grid"
                title=" Insights for Sri Lankan SMEs"
                content="Short, practical posts on HR & Payroll (EPF/ETF/APIT), ISO, Training & OBT, and Private Security—built to use the same day."
                button1=" Download Starter Pack"
            />
            <BlogGrid/>
        </div>
    );
};

export default page;