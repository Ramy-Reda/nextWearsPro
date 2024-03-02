import React from 'react';
import Image from 'next/image';
import Fashion from './to/fashion';
import index from '../styles/index.module.css';

const Blog = () => {
    return (
        <div>
            <div className={index.container_fluid}>
                <h1 className={index.teamBlog}>Our team</h1>
            </div>
            <div className={index.container_fluid}>
                <Fashion />
            </div>
        </div>
    );
}

export default Blog;
