classDiagram
class App
class AppRouter
class Navbar
class Footer
class NavItem
class Adopt
class CatService
class useService
class FormSelect
class FormRadio
class AdoptService
class BaseForm
class CatCard
class Contact
class ContactService
class Home
class News
class NewsService
class NewsItem
class BaseForm
class FormSuccessPopup
class FormItem

    App --> AppRouter
    App --> Navbar
    App --> Footer

    Navbar --> NavItem

    AppRouter --> Home
    AppRouter --> Cats
    AppRouter --> Adopt
    AppRouter --> News
    AppRouter --> Contact

    Adopt --> CatService
		Adopt --> BaseForm
    Adopt --> AdoptService

    Contact --> BaseForm
    Contact --> ContactService

    News --> useService
    News --> NewsService
    News --> NewsItem

    News --> NewsItem
		
		BaseForm --> FormItem
    BaseForm --> FormSelect
    BaseForm --> FormRadio

		BaseForm --> FormSuccessPopup

    Adopt --> CatService
    Adopt --> useService
    Adopt --> FormSelect
    Adopt --> FormRadio
    Adopt --> AdoptService
    Adopt --> BaseForm
    Adopt --> CatCard

    Contact --> BaseForm
    Contact --> ContactService

    News --> useService
    News --> NewsService
    News --> NewsItem

    class ContactService {
        <<service>>
        -data: table_contacts
        +createObject(data: object): Promise
        +getObjectById(id: string): Promise
        +getAllObjects(): Promise
        +removeObject(id: string): Promise
    }

    class AdoptService {
        <<service>>
        -data: table_adoptions
        +createObject(data: object): Promise
        +getObjectById(id: string): Promise
        +getAllObjects(): Promise
        +removeObject(id: string): Promise
    }

    class CatService {
        <<service>>
        -data: table_cats
        +createObject(data: object): Promise
        +getObjectById(id: string): Promise
        +getAllObjects(): Promise
        +removeObject(id: string): Promise
    }

    class NewsService {
        <<service>>
        -data: table_news
        +createObject(data: object): Promise
        +getObjectById(id: string): Promise
        +getAllObjects(): Promise
        +removeObject(id: string): Promise
    }

    class table_contacts {
        -name: string
        -email: string
        -message: string
    }

    class table_adoptions {
        -name: string
        -email: string
        -phone: string
        -address: string
        -city: string
        -state: string
        -zip: string
        -cat: string
        -termsAccepted: boolean
    }

    class table_cats {
        -name: string
        -description: string
        -image: string
    }

    class table_news {
        -date: string
        -content: string
    }

    AdoptService --> table_adoptions
    CatService --> table_cats
    ContactService --> table_contacts
    NewsService --> table_news