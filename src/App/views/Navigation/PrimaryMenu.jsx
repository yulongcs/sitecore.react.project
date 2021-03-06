var React = require("react");

var PrimaryMenu = React.createClass({
    renderMenuItems(items){
        if (!items) {
            return;
        }

        var self = this;
        var menu = [];

        items.map(function(item, index){
            if (item.Children.Items && item.Children.Items.length > 0) {
                menu.push(self.renderParentWithChildren(item, index));
            } else {
                menu.push(self.renderParentNoChildren(item, index));
            }
        });

        return menu;
    },
    renderParentNoChildren(item, index) {
        return (
            <li class="" key={index}>
                <a class="text-uppercase" href={item.Url} target={item.Target} dangerouslySetInnerHTML={{ __html: item.Title }} ></a>
            </li>
        );
    },
    renderParentWithChildren(item, index) {
        return (
            <li class="dropdown" key={index}>
                <a class="dropdown-toggle text-uppercase" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" target={item.Target}>
                    {item.Title}<span class="caret"></span>
                </a>
                <ul class="dropdown-menu">
                    {this.renderMenuItems(item.Children.Items)}
                </ul>
            </li>
        );
    },
    render() {

        var navigation = this.renderMenuItems(this.props.data.Items);

        return (
            <div class="collapse navbar-collapse" id="siteNavbar">
                <h1>Demo</h1>
                <ul class="nav navbar-nav">
                    {navigation}
                </ul>
            </div>
        );
    }
});

module.exports = PrimaryMenu;