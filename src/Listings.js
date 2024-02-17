/*
types = {
    1 -> Buy now 
    2 -> plot available
    3 -> potentially rent 
}
*/

import image1 from './images/the-exterior-facade-of-a-generic-small-business-building-W8WPEA.jpg'
import image2 from './images/losangeles-california.jpg'
import image3 from './images/losangeles-california.jpg'


const Listings = [
    {   Title : 'property 1',
        address : 'address 1',
        type : 1,
        price : '$500',
        image : image1
    },{ Title : 'property 2',
        address : 'address 2',
        type : 2,
        price : '$600',
        image : image2
    },{ Title : 'property 3',
        address : 'address 3',
        type : 1,
        price : '$2000',
        image : image3
    },{ Title : 'property 4',
        address : 'address 4',
        type : 1,
        price : '$500',
        image : image1
    },{ Title : 'property 5',
        address : 'address 5',
        type : 2,
        price : '$600',
        image : image2
    },{ Title : 'property 6',
        address : 'address 6',
        type : 1,
        price : '$2000',
        image : image3
    },{ Title : 'property 7',
        address : 'address 7',
        type : 1,
        price : '$500',
        image : image1
    },{ Title : 'property 8',
        address : 'address 8',
        type : 2,
        price : '$600',
        image : image2
    },{ Title : 'property 9',
        address : 'address 9',
        type : 1,
        price : '$2000',
        image : image3
    }
]

export default Listings