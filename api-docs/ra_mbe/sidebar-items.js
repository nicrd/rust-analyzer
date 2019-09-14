initSidebarItems({"enum":[["Delimiter",""],["ExpandError",""],["ParseError",""]],"fn":[["ast_to_token_tree","Convert the syntax tree (what user has written) to a `TokenTree` (what macro will consume)."],["syntax_node_to_token_tree","Convert the syntax node to a `TokenTree` (what macro will consume)."],["token_tree_to_expr","Parses the token tree (result of macro expansion) to an expression"],["token_tree_to_items","Parses the token tree (result of macro expansion) as a sequence of items"],["token_tree_to_macro_stmts","Parses the token tree (result of macro expansion) as a sequence of stmts"],["token_tree_to_pat","Parses the token tree (result of macro expansion) to a Pattern"],["token_tree_to_ty","Parses the token tree (result of macro expansion) to a Type"]],"struct":[["MacroRules","This struct contains AST for a single `macro_rules` definition. What might be very confusing is that AST has almost exactly the same shape as `tt::TokenTree`, but there's a crucial difference: in macro rules, `$ident` and `$()*` have special meaning (see `Var` and `Repeat` data structures)"],["Punct",""]]});