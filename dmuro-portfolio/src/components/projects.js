import React from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardActions,
  Button,
  CardText
} from "react-mdl";

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }
  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
          <CardTitle
            style={{
              color: "#fff",
              height: "500px",
              background:
                "url(https://static1.st8fm.com/en_US/content_pages/1/assets/sfma-phone-co-xl.png) center/cover"
            }}
          />
          <CardText style={{ textAlign: "justify" }}>
            Community Offers is a service only for State Farm customers. In
            there they can find nice discounts from local and national business.
          </CardText>
          <CardActions border>
            {" "}
            <Button
              colored
              href="https://www.statefarm.com/community-offers"
            >
              Live_Demo
            </Button>{" "}
          </CardActions>
          <CardActions style={{ color: "#fff" }}></CardActions>
        </Card>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
          <CardTitle
            style={{
              color: "#fff",
              height: "500px",
              background:
                "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNWI0Wbwxi7AABVy4ypz_L3Dsu3UXeDC4ewxgUSj4_6nZRpYjrNA) center/cover"
            }}
          />
          <CardText style={{ textAlign: "justify" }}>
            Community Offers also brings a very good way to put togeter local
            business to State Farm customers. The merchant portal is a free
            advertisement platform in which local business can promote and sale
            their products.
          </CardText>
          <CardActions border>
            {" "}
            <Button colored  href="https://www.statefarm.com/community-offers/merchants">Live_Demo</Button>{" "}
          </CardActions>
          <CardActions style={{ color: "#fff" }}></CardActions>
        </Card>
      );
    }
  }

  render() {
    return (
      <div className="category-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={tabId => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>
            State Farm<sup>®</sup>{" "} Community Offers
          </Tab>
          <Tab>
            State Farm<sup>®</sup> {" "}Merchant Portal
          </Tab>
        </Tabs>
        <section className="projects-grid">
          <Grid className="projects-grid">
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>
        </section>
      </div>
    );
  }
}
export default Projects;
