import '@/assets/styles/globals.css';
import { ReactNode } from 'react';
export const metadata = {
    title: 'Property Pulse',
    description: 'Property Pulse is a real estate website that provides information on properties for sale and rent.',
    keywords: 'real estate, properties, for sale, for rent',
}

interface MainLayoutProps {
    children: ReactNode;
}

const MainLayout = ({children}: MainLayoutProps) => {
    return ( 
    <html>
        <body>
            <main>{children}</main>
        </body>
    </html> 
    );
}
 
export default MainLayout;