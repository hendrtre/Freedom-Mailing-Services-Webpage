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
    faMailBulk
} from "@fortawesome/free-solid-svg-icons"

import {
    faFacebook
} from "@fortawesome/free-brands-svg-icons"

const Icons = () => {
    return library.add(
        faFacebook,
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
        faMailBulk
    )
}

export default Icons