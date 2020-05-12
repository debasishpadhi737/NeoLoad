// Javascript skeleton.
// Edit and adapt to your needs.
// The documentation of the NeoLoad Javascript API
// is available in the appendix of the documentation.

// Get variable value from VariableManager

var myVar = context.variableManager.getValue("DocumentSearchQuery.IndexCValue");
context.variableManager.setValue("DocAccount",myVar);

var myVar = context.variableManager.getValue("DocumentSearchQuery.MasterKey");
context.variableManager.setValue("DocMasterKey",myVar);

var myVar = context.variableManager.getValue("DocumentSearchQuery.PageKey");
context.variableManager.setValue("DocPageKey",myVar);