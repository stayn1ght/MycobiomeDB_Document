---
order: 2
---
# Use the graphic data selector

<b><span style="color:darkblue">Mycobiome</span><span style="color:forestgreen">DB</span></b> is equipped with **two graphical data selectors** to allow users to quickly build complex queries to find **projects** and **runs** of interests; see below:

![](https://github.com/evolgeniusteam/gmrepodocumentation/blob/main/gmrepodocumentation/site/images/index/query_builder_example.png)

The selectors are a bit difficult to start with, so we provided six examples. Users can click one of the links **<code>Examples: #1, #2, #3</code>** above the selectors to view:

* the purpose of the search, e.g., <code>"get runs from healthy people with healthy BMIs"</code>,
* the selector setup, and 
* query logic in SQL command string: <code>"disease = 'D006262' AND BMI BETWEEN 18.5 AND 24.9"</code>.

![](https://github.com/evolgeniusteam/gmrepodocumentation/tree/gh-pages/usage/images/dataselectors/query_number1.png)


## Build complex queries using the data selector

It is very easy to use the data selectors. There are three basic logics to build an efficient query:

* AND,
* OR, and
* GROUP to modify the orders of the logics.

For example, to search for samples that were taken from <code>healthy individuals</code> that are **either** American **or** British, we need to:

  * a. first build a group logic using the <code>:fontawesome-solid-plus-circle: ADD GROUP</code> button that defines the target population;

  * b. then add two rules using the <code>:fontawesome-solid-plus: ADD RULE</code> button that set <code>Country</code> to <code>United States of America</code> **<code>OR</code>** <code>United Kingdom</code>;
    * **note** the logic between two rules on the <code>Country</code> is **<code>OR</code>**!

  * c. then add a new rule <code>paralelle</code> to the above group, and use it to select <code>Phenotype</code> as <code>Health</code>
    * **note** the logic between the <code>Phenotype</code> and the <code>Country</code> group is **<code>AND</code>**!.

The resulting graphical selector and the query logic are shown below:

![](https://github.com/evolgeniusteam/gmrepodocumentation/tree/gh-pages/usage/images/dataselectors/qbexample1.png)

## Examples

::: tip get runs with colonic diseases
![](https://github.com/evolgeniusteam/gmrepodocumentation/tree/gh-pages/usage/images/dataselectors/qbexample2.png)
:::

::: tip get runs from American with no recent antibiotic usage
![](https://github.com/evolgeniusteam/gmrepodocumentation/tree/gh-pages/usage/images/dataselectors/qbexample3.png)
:::

Data selector examples for projects:

::: tip get projects contain both CRC patients and healthy controls
![](https://github.com/evolgeniusteam/gmrepodocumentation/tree/gh-pages/usage/images/dataselectors/qbprj1.png)
:::

::: tip get projects contain both Bipolar patients and healthy controls, with no failed runs
![](https://github.com/evolgeniusteam/gmrepodocumentation/tree/gh-pages/usage/images/dataselectors/qbprj2.png)
:::

::: tip get projects contain more than 200 Diarrhea patients
![](https://github.com/evolgeniusteam/gmrepodocumentation/tree/gh-pages/usage/images/dataselectors/qbprj3.png)
:::

More examples will be added in the future.