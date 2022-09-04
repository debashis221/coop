// ** Icon imports
import Login from 'mdi-material-ui/Login'
import Table from 'mdi-material-ui/Table'
import CubeOutline from 'mdi-material-ui/CubeOutline'
import HomeOutline from 'mdi-material-ui/HomeOutline'
import FormatLetterCase from 'mdi-material-ui/FormatLetterCase'
import AccountCogOutline from 'mdi-material-ui/AccountCogOutline'
import CreditCardOutline from 'mdi-material-ui/CreditCardOutline'
import AccountPlusOutline from 'mdi-material-ui/AccountPlusOutline'
import AlertCircleOutline from 'mdi-material-ui/AlertCircleOutline'
import GoogleCirclesExtended from 'mdi-material-ui/GoogleCirclesExtended'

const navigation = () => {
  return [
    {
      title: 'Home',
      icon: HomeOutline,
      path: '/',
    },
    {
      title: 'Users',
      
      icon: AccountCogOutline,
      path: '/createuser'
    },
    {
      title: 'Orders',
      icon: CreditCardOutline,
      path: '/Order'
    },
    {
      title: 'Products',
      icon: FormatLetterCase,
      path: '/updateproduct'
    },
   
    {
      title: 'Suppliers',
      icon: Table,
      path: '/supplier'
    },
    // {
    //   sectionTitle: 'Pages'
    // },
    // {
    //   title: 'Login',
    //   icon: Login,
    //   path: '/pages/login',
    //   openInNewTab: true
    // },
    // {
    //   title: 'Supplier',
    //   icon: AccountPlusOutline,
    //   path: '/supplier',
    //   openInNewTab: true
    // },
    
    // {
    //   title: 'Create/Update User',
    //   icon: AccountPlusOutline,
    //   path: '/createuser',
    //   openInNewTab: true
    // },
    // {
    //   title: 'Create/Update Product',
    //   icon: AccountPlusOutline,
    //   path: '/updateproduct',
    //   openInNewTab: true
    // },
    // {
    //   title: 'Error',
    //   icon: AlertCircleOutline,
    //   path: '/pages/error',
    //   openInNewTab: true
    // },
    // {
    //   sectionTitle: 'User Interface'
    // },
    // {
    //   title: 'Typography',
    //   icon: FormatLetterCase,
    //   path: '/typography'
    // },
    // {
    //   title: 'Icons',
    //   path: '/icons',
    //   icon: GoogleCirclesExtended
    // },
    // {
    //   title: 'Cards',
    //   icon: CreditCardOutline,
    //   path: '/cards'
    // },
    // {
    //   title: 'Tables',
    //   icon: Table,
    //   path: '/tables'
    // },
    // {
    //   icon: CubeOutline,
    //   title: 'Form Layouts',
    //   path: '/form-layouts'
    // }
    
  ]
}

export default navigation
