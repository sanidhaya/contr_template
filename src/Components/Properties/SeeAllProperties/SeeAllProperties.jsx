import React from 'react'
import Property from '../../../Properties'
import PropertyCard from '../Property_Cards/propertyCards'
import './SeeAllProperties.css'

const SeeAllProperties = () => {
  return (
    <div>
        <div className='property-grid-container'>
            {Property.map((propertyno) => (
                <>
                    <div key={propertyno.id}> 
                        <PropertyCard PropertyNo={propertyno} />
                    </div>
                </>
            )
        )
    }
        </div>
    </div>
  )
}

export default SeeAllProperties
