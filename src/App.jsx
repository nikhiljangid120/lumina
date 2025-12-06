import React from 'react'
import Layout from './components/Layout'
import ProductGallery from './components/ProductGallery'
import ProductInfo from './components/ProductInfo'
import ReviewsSection from './components/ReviewsSection'
import SalesPopup from './components/SalesPopup'
import IngredientsSpotlight from './components/IngredientsSpotlight'
import TrustedBy from './components/TrustedBy'
import RitualSection from './components/RitualSection'
import FAQSection from './components/FAQSection'
import { ThemeProvider } from './context/ThemeContext'

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <SalesPopup />
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))',
            gap: '80px',
            alignItems: 'center',
            minHeight: '85vh',
            paddingTop: '20px'
          }}>
            <ProductGallery />
            <ProductInfo />
          </div>
        </div>

        <TrustedBy />
        <RitualSection />
        <IngredientsSpotlight />

        <div className="container">
          <ReviewsSection />
        </div>
        <FAQSection />

        {/* Mobile Responsiveness Global Overrides */}
        <style>{`
            @media (max-width: 768px) {
                .container {
                    padding: 0 20px !important;
                }
                .product-gallery {
                    min-height: 400px !important;
                    padding: 20px !important;
                }
                h2 {
                    fontSize: 2rem !important;
                }
                h3 {
                    fontSize: 1.5rem !important;
                }
                /* Grid Collapse */
                div[style*="grid-template-columns"] {
                    grid-template-columns: 1fr !important;
                    gap: 40px !important;
                }
            }
        `}</style>
      </Layout>
    </ThemeProvider>
  )
}

export default App