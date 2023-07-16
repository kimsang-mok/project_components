import data from "../data/cat_subcat.json"
import DisplayMenu from "./DisplayMenu";
import "./Menu.scss"
import Sidebar from "./Sidebar";


function Menu() {
    const drinks = [];
    const food = [];
    const atHomeCoffee = [];
    const merchandise = [];
    for (const item of data) {
        if (item.categories === "Drinks") {
            drinks.push(item)
        }
        else if (item.categories === "Food") {
            food.push(item)
        }
        else if (item.categories === "At Home Coffee") {
            atHomeCoffee.push(item)
        }
        else {
            merchandise.push(item)
        }
    }


    return (
        <>
            <main className="main_container">
                <div className="sidebar-container">
                    <Sidebar />
                </div>

                <h1>Menu</h1>
                <section className="menu drinks">
                    <div className="category">
                        <h2>Drinks</h2>
                        <hr />
                    </div>

                    {drinks.map((item) => (
                        <>{DisplayMenu(item)}</>
                    ))}
                </section>
                <section className="menu food">
                    <div className="category">
                        <h2>Foods</h2>
                        <hr />
                    </div>
                    {food.map((item) => (
                        <>{DisplayMenu(item)}</>
                    ))}
                </section>
                <section className="menu at-home-coffee">
                    <div className="category">
                        <h2>At Home Coffee</h2>
                        <hr />
                    </div>
                    {atHomeCoffee.map((item) => (
                        <>{DisplayMenu(item)}</>
                    ))}
                </section>
                <section className="menu food">
                    <div className="category">
                        <h2>Merchandise</h2>
                        <hr />
                    </div>
                    {merchandise.map((item) => (
                        <>{DisplayMenu(item)}</>
                    ))}
                </section>

            </main>
        </>
    )
}

export default Menu