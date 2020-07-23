import { library } from "@fortawesome/fontawesome-svg-core"

import {
    faFileInvoiceDollar,
    faBook,
    faDraftingCompass,
    faHardHat,
    faIdCard,
    faDatabase,
    faNewspaper,
    faUsers,
    faBars,
    faArrowAltCircleLeft,
    faFeatherAlt,
    faScroll,
    faMailBulk,     
    faFlagUsa
} from "@fortawesome/free-solid-svg-icons"

import {
    faFacebook,
    faFacebookSquare
} from "@fortawesome/free-brands-svg-icons"

const Icons = () => {
    return library.add(
        faFacebook,
        faFacebookSquare,
        faFileInvoiceDollar,
        faBook,
        faDraftingCompass,
        faHardHat,
        faIdCard,
        faDatabase,
        faNewspaper,
        faUsers,
        faBars,
        faArrowAltCircleLeft,
        faFeatherAlt,
        faScroll,
        faMailBulk,
        faFlagUsa,
    )
}

export default Icons