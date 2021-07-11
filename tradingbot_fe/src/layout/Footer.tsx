import { createClass } from "src/styles";

const styles = {
    root: createClass(
        'bg-white', 'dark:bg-gray-800',
        'py-3', 'px-6',
    ),
};

const Component = () => (
    <div className={styles.root}>
        <h3>OpenAPI spec: <a href="http://35.194.167.78/openapi.json">/openapi.json</a></h3>
        <h3>API Explorer: <a href="http://35.194.167.78/explorer">/explorer</a></h3>
    </div>
);


export default Component;