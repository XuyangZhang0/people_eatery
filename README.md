# The People Eatery
People Eatery is a virtual menu application which would help users view the menu and place an order. It provides the additional capability of order updating and deletion based on user privileges. This application has two user personas where an User, as restaurent owner, can log in, place orders for guests as per Table Number, update the order status when delivered, and delete the order which could not be served. The other is Guest who can view the menu and place an order.

This application uses Node.js, Express.js, Handlebars.js, Bulma Extensions (Accordian), Authetication module with session, Axios (Third party Api call from Node) with API keys and config in .env file. Also the application is deployed using Heroku.

## Main Features

* On the application load, Menu Items listed with category accordians are displayed with navigation options (Menu|Cart|Order|Login) at the top right corner.
* When clicking the "Login" option the User is prompted to log in to the application. If the User does not have a login, they can sign up and log in.
* The User can add menu items to the cart by clicking the Add to Cart button under the menu item.
* When clicking the Cart Icon on the Navigation bar, menu items are added to the cart and will navigate to the cart page.
* The User will be able to manipulate the cart by changing the quantity, and the total price of the items in the cart will be displayed.
* When clicking the "Order" button on the cart page, the order will be placed in the database next to the entered table number.
* As the logged-in Owner, by clicking the Order link in the navigation bar, the User is navigated to the Orders page.
* When the "Orders" page loads, all orders from the database are displayed.
* When the ordered item is delivered to the guest, the Order can be updated with the order item "status."
* Also, the User has facility to delete the order.
* The site is also responsive for the Guest user to scan a QR code and view the digital menu on a mobile screen.

## Mock-Up

The following image is the application screen shot:

![Animation cycles through signing into the app, adding menuitems to cart, placing the order, updating the order](./Assets/people-eatery.PNG)

## Application Deployed Url

Below is link for application deployed using Heroku

[The People Eatery](https://people-eatery.herokuapp.com/)

Scan the QR code to view the live web site

![The People Eatery QR](./Assets/PeopleEatery_QRCode.png)
