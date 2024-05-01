import Link from "next/link"
export default function HtmlCssEssentials() {
    return (
                <div className="container mx-auto text-center md:text-left px-2 md:ml-16 xl:ml-48">
                <div className="container mx-auto">    
                    <h1 className="text-3xl text-center md:text-left mt-4 font-bold text-red-500">COURSE TITLE</h1>
                    <h2 className="text-2xl text-center md:text-left mt-4">HTML & CSS Essentials</h2>
                    <h1 className="text-2xl text-center md:text-left mt-4 font-bold">COURSE CODE</h1>
                    <h2 className="text-2xl text-center md:text-left mt-4">HCS-101</h2>
                    <h1 className="text-2xl text-center md:text-left mt-4 font-bold">Course Syllables:</h1>
                    <h1 className="text-2xl text-center md:text-left mt-4 font-bold">Section 1: Introduction to HTML:</h1>
                    <ul className="list-disc list-inside text-start xl:text-2xl py-2 ml-2 ">
                        <li className="py-2">
                         Basics: Intro to HTML Syntax    
                        </li>
                        <li className="py-2">
                            Understanding the structure of HTML documents
                        </li>
                        <li className="py-2">
                            Exploring basic HTML tags:
                        </li>
                        </ul>
                        <ul className="list-disc list-inside text-start xl:text-2xl py-2 ml-2 ">
                        <li className="py-2">
                         Links: Absolute & Relative URLs    
                        </li>
                        <li className="py-2">
                        Creating hyperlinks with anchor tags 

                        </li>
                        <li className="py-2">
                        Linking to external websites and internal pages
                        </li>
                        <li className="py-2">
                        Opening links in new browser windows/tabs
                        </li>
                        <li className="py-2">
                        Implementing image links with the img tag
                        </li>
                        <li className="py-2">
                        Styling horizontal rules
                        </li>
                        <li className="py-2">
                        Specifying image sources and attributes: src, width, height, alt
                        </li>
                        </ul>
                        <h1 className="text-2xl text-center md:text-left mt-4 font-bold">Section 2: Introduction to Cascading Style Sheets (CSS)</h1>
                        <ul className="list-disc list-inside text-start xl:text-2xl py-2 ml-2 ">
                        <li className="py-2">
                        Basics of CSS    
                        </li>
                        <li className="py-2">
                        Introduction to CSS and its role in web development
                        </li>
                        <li className="py-2">
                        The style tag for embedding CSS in HTML documents
                        </li>
                        <li className="py-2">
                        Selecting HTML elements with tag selectors
                        </li>
                        <li className="py-2">
                        Applying CSS properties: font-size, font-family, color, line-height
                        </li>
                        <li className="py-2">
                        Understanding hexadecimal color codes
                        </li>
                        </ul>
                        <ul className="list-disc list-inside text-start xl:text-2xl py-2 ml-2 ">
                        <li className="py-2">
                        CSS Class Selectors    
                        </li>
                        <li className="py-2">
                        Using the class attribute to apply styles
                        </li>
                        <li className="py-2">
                        Defining and applying CSS class selectors
                        </li>
                        <li className="py-2">
                        Styling elements with the span tag
                        </li>
                        <li className="py-2">
                        Controlling opacity with CSS
                        </li>
                        </ul>
                        <h1 className="text-center md:text-left mt-4 font-bold">Section 3: Browser Developer Tools & HTML5 Semantic Elements</h1>
                        <ul className="list-disc list-inside text-start py-2 ml-2 ">
                        <li className="py-2">
                        Using Browser Developer Tools    
                        </li>
                        <li className="py-2">
                        Opening and navigating the DevTools in Chrome
                        </li>
                        <li className="py-2">
                        Editing HTML and CSS within the DevTools
                        </li>
                        <li className="py-2">
                        Fine-tuning CSS styles using DevTools
                        </li>
                        </ul>
                        <ul className="list-disc list-inside text-start xl:text-2xl py-2 ml-2 ">
                        <li className="py-2">
                        HTML5 Semantic Elements & Validating HTML    
                        </li>
                        <li className="py-2">
                        Understanding semantic HTML5 elements: header, nav, aside, footer main, 
                        </li>
                        <li className="py-2">
                        Exploring structural elements: article, section, figure, figcaption
                        </li>
                        <li className="py-2">
                        Validating HTML code for errors and compliance with standards
                        </li>
                        </ul>
                        <h1 className="text-2xl text-center md:text-left mt-4 font-bold">Section 4: Flexbox and Grid Layout</h1>
                        <ul className="list-disc list-inside text-start xl:text-2xl py-2 ml-2 ">
                        <li className="py-2">
                        Introduction to Flexbox    
                        </li>
                        <li className="py-2">
                        Understanding the Flexbox model
                        </li>
                        <li className="py-2">
                        Flex container and flex items
                        </li>
                        <li className="py-2">
                        Flex direction, justify-content, align-items, and align-self properties
                        </li>
                        <li className="py-2">
                        Flexbox layout examples
                        </li>
                        </ul>
                        <ul className="list-disc list-inside text-start py-2 ml-2 ">
                        <li className="py-2">
                        Introduction to CSS Grid Layout    
                        </li>
                        <li className="py-2">
                        Overview of the CSS Grid Layout module
                        </li>
                        <li className="py-2">
                        Grid container and grid items
                        </li>
                        <li className="py-2">
                        Creating grid columns and rows
                        </li>
                        <li className="py-2">
                        Grid lines, tracks, and gaps
                        </li>
                        <li className="py-2">
                            <Link href="/training" legacyBehavior>
                                <a className="text-red-500">back to all training</a>
                            </Link>
                        </li>
                        </ul>
                    </div>
                    </div>  
    )
}