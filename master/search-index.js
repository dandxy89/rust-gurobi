var searchIndex = {};
searchIndex["gurobi"] = {"doc":"This crate provides primitive Rust APIs for Gurobi Optimizer.","items":[[3,"Env","gurobi","Gurobi environment object",null,null],[3,"Model","","Gurobi model object associated with certain environment.",null,null],[3,"Var","","Proxy object of a variables",null,null],[3,"Constr","","Proxy object of a linear constraint",null,null],[3,"QConstr","","Proxy object of a quadratic constraint",null,null],[3,"SOS","","Proxy object of a Special Order Set (SOS) constraint",null,null],[3,"LinExpr","","Linear expression of variables",null,null],[3,"QuadExpr","","Quadratic expression of variables",null,null],[3,"Proxy","","Provides methods to query/modify attributes associated with certain element.",null,null],[3,"Callback","","The context object for Gurobi callback.",null,null],[4,"Error","","The error type for operations in Gurobi Rust API",null,null],[13,"FromAPI","","An exception returned from Gurobi C API",0,null],[13,"NulError","","See https://doc.rust-lang.org/std/ffi/struct.NulError.html",0,null],[13,"InconsitentDims","","Inconsistent argument dimensions",0,null],[13,"StringConversion","","String conversion error",0,null],[4,"VarType","","Type for new variable",null,null],[13,"Binary","","",1,null],[13,"Continuous","","",1,null],[13,"Integer","","",1,null],[4,"ConstrSense","","Sense for new linear/quadratic constraint",null,null],[13,"Equal","","",2,null],[13,"Greater","","",2,null],[13,"Less","","",2,null],[4,"ModelSense","","Sense of new objective function",null,null],[13,"Minimize","","",3,null],[13,"Maximize","","",3,null],[4,"SOSType","","Type of new SOS constraint",null,null],[13,"SOSType1","","",4,null],[13,"SOSType2","","",4,null],[4,"Status","","Status of a model",null,null],[13,"Loaded","","",5,null],[13,"Optimal","","",5,null],[13,"Infeasible","","",5,null],[13,"InfOrUnbd","","",5,null],[13,"Unbounded","","",5,null],[13,"CutOff","","",5,null],[13,"IterationLimit","","",5,null],[13,"NodeLimit","","",5,null],[13,"TimeLimit","","",5,null],[13,"SolutionLimit","","",5,null],[13,"Interrupted","","",5,null],[13,"Numeric","","",5,null],[13,"SubOptimal","","",5,null],[13,"InProgress","","",5,null],[4,"RelaxType","","Type of cost function at feasibility relaxation",null,null],[13,"Linear","","The weighted magnitude of bounds and constraint violations\n(`penalty(s_i) = w_i s_i`)",6,null],[13,"Quadratic","","The weighted square of magnitude of bounds and constraint violations\n(`penalty(s_i) = w_i s_i^2`)",6,null],[13,"Cardinality","","The weighted count of bounds and constraint violations\n(`penalty(s_i) = w_i * [s_i &gt; 0]`)",6,null],[4,"Where","","Location where the callback called",null,null],[13,"Polling","","Periodic polling callback",7,null],[13,"PreSolve","","Currently performing presolve",7,null],[12,"coldel","gurobi::Where","The number of columns removed by presolve to this point.",7,null],[12,"rowdel","","The number of rows removed by presolve to this point.",7,null],[12,"senchg","","The number of constraint senses changed by presolve to this point.",7,null],[12,"bndchg","","The number of variable bounds changed by presolve to this point.",7,null],[12,"coecfg","","The number of coefficients changed by presolve to this point.",7,null],[13,"Simplex","gurobi","Currently in simplex",7,null],[12,"itrcnt","gurobi::Where","Current simplex iteration count.",7,null],[12,"objval","","Current simplex objective value.",7,null],[12,"priminf","","Current primal infeasibility.",7,null],[12,"dualinf","","Current dual infeasibility.",7,null],[12,"ispert","","Is problem current perturbed?",7,null],[13,"MIP","gurobi","Currently in MIP",7,null],[12,"objbst","gurobi::Where","Current best objective.",7,null],[12,"objbnd","","Current best objective bound.",7,null],[12,"nodcnt","","Current explored node count.",7,null],[12,"solcnt","","Current count of feasible solutions found.",7,null],[12,"cutcnt","","Current count of cutting planes applied.",7,null],[12,"nodleft","","Current unexplored node count.",7,null],[12,"itrcnt","","Current simplex iteration count.",7,null],[13,"MIPSol","gurobi","Found a new MIP incumbent",7,null],[12,"obj","gurobi::Where","Objective value for new solution.",7,null],[12,"objbst","","Current best objective.",7,null],[12,"objbnd","","Current best objective bound.",7,null],[12,"nodcnt","","Current explored node count.",7,null],[12,"solcnt","","Current count of feasible solutions found.",7,null],[13,"MIPNode","gurobi","Currently exploring a MIP node",7,null],[12,"status","gurobi::Where","Optimization status of current MIP node (see the Status Code section for further information).",7,null],[12,"objbst","","Current best objective.",7,null],[12,"objbnd","","Current best objective bound.",7,null],[12,"nodcnt","","Current explored node count.",7,null],[12,"solcnt","","Current count of feasible solutions found.",7,null],[13,"Message","gurobi","Printing a log message",7,null],[13,"Barrier","","Currently in barrier.",7,null],[12,"itrcnt","gurobi::Where","Current barrier iteration count.",7,null],[12,"primobj","","Primal objective value for current barrier iterate.",7,null],[12,"dualobj","","Dual objective value for current barrier iterate.",7,null],[12,"priminf","","Primal infeasibility for current barrier iterate.",7,null],[12,"dualinf","","Dual infeasibility for current barrier iterate.",7,null],[12,"compl","","Complementarity violation for current barrier iterate.",7,null],[5,"version","gurobi","Returns the version number of Gurobi",null,null],[11,"clone","gurobi::env::param::exports","",8,null],[11,"fmt","","",8,null],[11,"clone","","",9,null],[11,"fmt","","",9,null],[11,"clone","","",10,null],[11,"fmt","","",10,null],[11,"clone","","",11,null],[11,"fmt","","",11,null],[11,"clone","","",12,null],[11,"fmt","","",12,null],[11,"clone","","",13,null],[11,"fmt","","",13,null],[11,"clone","","",14,null],[11,"fmt","","",14,null],[11,"from","std::ffi::c_str","",15,{"inputs":[{"name":"intparam"}],"output":{"name":"cstring"}}],[11,"from","","",15,{"inputs":[{"name":"doubleparam"}],"output":{"name":"cstring"}}],[11,"from","","",15,{"inputs":[{"name":"stringparam"}],"output":{"name":"cstring"}}],[11,"from","","",15,{"inputs":[{"name":"intattr"}],"output":{"name":"cstring"}}],[11,"from","","",15,{"inputs":[{"name":"charattr"}],"output":{"name":"cstring"}}],[11,"from","","",15,{"inputs":[{"name":"doubleattr"}],"output":{"name":"cstring"}}],[11,"from","","",15,{"inputs":[{"name":"stringattr"}],"output":{"name":"cstring"}}],[11,"new","gurobi","Create an environment with log file",16,{"inputs":[{"name":"str"}],"output":{"name":"result"}}],[11,"new_client","","Create a client environment on a computer server with log file",16,{"inputs":[{"name":"str"},{"name":"str"},{"name":"i32"},{"name":"str"},{"name":"i32"},{"name":"f64"}],"output":{"name":"result"}}],[11,"new_model","","Create an empty Gurobi model from the environment",16,null],[11,"read_model","","Read a model from a file",16,null],[11,"get","","Query the value of a parameter",16,null],[11,"set","","Set the value of a parameter",16,null],[11,"read_params","","Import a set of parameter values from a file",16,null],[11,"write_params","","Write the set of parameter values to a file",16,null],[11,"message","","Insert a message into log file.",16,null],[11,"drop","","",16,null],[11,"fmt","","",0,null],[11,"from","","",0,{"inputs":[{"name":"nulerror"}],"output":{"name":"error"}}],[11,"clone","","",7,null],[11,"fmt","","",7,null],[11,"into","","",7,null],[11,"get_where","","Retrieve the location where the callback called.",17,null],[11,"get_node_rel","","Retrive node relaxation solution values at the current node.",17,null],[11,"get_solution","","Retrieve values from the current solution vector.",17,null],[11,"set_solution","","Provide a new feasible solution for a MIP model.",17,null],[11,"get_runtime","","Retrieve the elapsed solver runtime [sec].",17,null],[11,"add_cut","","Add a new cutting plane to the MIP model.",17,null],[11,"add_lazy","","Add a new lazy constraint to the MIP model.",17,null],[11,"deref","","",17,null],[11,"clone","","",1,null],[11,"fmt","","",1,null],[11,"into","","",1,null],[11,"clone","","",2,null],[11,"fmt","","",2,null],[11,"into","","",2,null],[11,"clone","","",3,null],[11,"fmt","","",3,null],[11,"into","","",3,null],[11,"clone","","",4,null],[11,"fmt","","",4,null],[11,"into","","",4,null],[11,"eq","","",5,null],[11,"clone","","",5,null],[11,"fmt","","",5,null],[11,"from","","",5,{"inputs":[{"name":"i32"}],"output":{"name":"status"}}],[11,"clone","","",6,null],[11,"fmt","","",6,null],[11,"into","","",6,null],[11,"clone","","",18,null],[11,"get","","Query the value of attribute.",18,null],[11,"set","","Set the value of attribute.",18,null],[11,"eq","","",18,null],[11,"clone","","",19,null],[11,"from","","",19,{"inputs":[{"name":"proxy"}],"output":{"name":"var"}}],[11,"deref","","",19,null],[11,"deref_mut","","",19,null],[11,"eq","","",19,null],[11,"get_type","","",19,null],[11,"clone","","",20,null],[11,"from","","",20,{"inputs":[{"name":"proxy"}],"output":{"name":"constr"}}],[11,"deref","","",20,null],[11,"deref_mut","","",20,null],[11,"eq","","",20,null],[11,"clone","","",21,null],[11,"from","","",21,{"inputs":[{"name":"proxy"}],"output":{"name":"qconstr"}}],[11,"deref","","",21,null],[11,"deref_mut","","",21,null],[11,"eq","","",21,null],[11,"clone","","",22,null],[11,"from","","",22,{"inputs":[{"name":"proxy"}],"output":{"name":"sos"}}],[11,"deref","","",22,null],[11,"deref_mut","","",22,null],[11,"eq","","",22,null],[11,"clone","","",23,null],[11,"new","","Create an empty linear expression.",23,{"inputs":[],"output":{"name":"self"}}],[11,"add_term","","Add a linear term into the expression.",23,null],[11,"add_constant","","Add a constant into the expression.",23,null],[11,"get_value","","Get actual value of the expression.",23,null],[11,"into","","",23,null],[11,"clone","","",24,null],[11,"new","","",24,{"inputs":[],"output":{"name":"self"}}],[11,"add_term","","Add a linear term into the expression.",24,null],[11,"add_qterm","","Add a quadratic term into the expression.",24,null],[11,"add_constant","","Add a constant into the expression.",24,null],[11,"get_value","","Get actual value of the expression.",24,null],[11,"mul","","",19,null],[11,"mul","","",24,null],[11,"add","","",23,null],[11,"sub","","",23,null],[11,"add","","",23,null],[11,"sub","","",23,null],[11,"add","","",24,null],[11,"sub","","",24,null],[11,"add","","",24,null],[11,"sub","","",24,null],[11,"add","","",23,null],[11,"new","","Create an empty Gurobi model from the environment.",25,{"inputs":[{"name":"str"},{"name":"env"}],"output":{"name":"result"}}],[11,"read_from","","Read a model from a file",25,{"inputs":[{"name":"str"},{"name":"env"}],"output":{"name":"result"}}],[11,"copy","","create a copy of the model",25,null],[11,"fixed","","Create an fixed model associated with the model.",25,null],[11,"relax","","Create an relaxation of the model (undocumented).",25,null],[11,"presolve","","Perform presolve on the model.",25,null],[11,"feasibility","","Create a feasibility model (undocumented).",25,null],[11,"get_env","","Get immutable reference of an environment object associated with the model.",25,null],[11,"get_env_mut","","Get mutable reference of an environment object associated with the model.",25,null],[11,"update","","Apply all modification of the model to process",25,null],[11,"optimize","","Optimize the model synchronously",25,null],[11,"optimize_async","","Optimize the model asynchronously",25,null],[11,"optimize_with_callback","","Optimize the model with a callback function",25,null],[11,"sync","","Wait for a optimization called asynchronously.",25,null],[11,"compute_iis","","Compute an Irreducible Inconsistent Subsystem (IIS) of the model.",25,null],[11,"terminate","","Send a request to the model to terminate the current optimization process.",25,null],[11,"reset","","Reset the model to an unsolved state.",25,null],[11,"tune","","Perform an automated search for parameter settings that improve performance on the model.\nSee also references [on official\nmanual](https://www.gurobi.com/documentation/6.5/refman/parameter_tuning_tool.html#sec:Tuning).",25,null],[11,"get_tune_result","","Prepare to retrieve the results of `tune()`.\nSee also references [on official\nmanual](https://www.gurobi.com/documentation/6.5/refman/parameter_tuning_tool.html#sec:Tuning).",25,null],[11,"get_concurrent_env","","Create/retrieve a concurrent environment for the model",25,null],[11,"discard_concurrent_envs","","Discard all concurrent environments for the model.",25,null],[11,"message","","Insert a message into log file.",25,null],[11,"read","","Import optimization data of the model from a file.",25,null],[11,"write","","Export optimization data of the model to a file.",25,null],[11,"add_var","","add a decision variable to the model.",25,null],[11,"add_vars","","add decision variables to the model.",25,null],[11,"add_constr","","add a linear constraint to the model.",25,null],[11,"add_constrs","","add linear constraints to the model.",25,null],[11,"add_range","","Add a range constraint to the model.",25,null],[11,"add_ranges","","Add range constraints to the model.",25,null],[11,"add_qconstr","","add a quadratic constraint to the model.",25,null],[11,"add_sos","","add Special Order Set (SOS) constraint to the model.",25,null],[11,"set_objective","","Set the objective function of the model.",25,null],[11,"get","","Query the value of attributes which associated with variable/constraints.",25,null],[11,"set","","Set the value of attributes which associated with variable/constraints.",25,null],[11,"get_values","","Query the value of attributes which associated with variable/constraints.",25,null],[11,"set_values","","Set the value of attributes which associated with variable/constraints.",25,null],[11,"feas_relax","","Modify the model to create a feasibility relaxation.",25,null],[11,"set_pwl_obj","","Set a piecewise-linear objective function of a certain variable in the model.",25,null],[11,"status","","Retrieve the status of the model.",25,null],[11,"get_vars","","Retrieve an iterator of the variables in the model.",25,null],[11,"get_constrs","","Retrieve an iterator of the linear constraints in the model.",25,null],[11,"get_qconstrs","","Retrieve an iterator of the quadratic constraints in the model.",25,null],[11,"get_sos","","Retrieve an iterator of the special order set (SOS) constraints in the model.",25,null],[11,"remove_var","","Remove a variable from the model.",25,null],[11,"remove_constr","","Remove a linear constraint from the model.",25,null],[11,"remove_qconstr","","Remove a quadratic constraint from the model.",25,null],[11,"remove_sos","","Remove a special order set (SOS) cnstraint from the model.",25,null],[11,"get_coeff","","Retrieve a single constant matrix coefficient of the model.",25,null],[11,"set_coeff","","Change a single constant matrix coefficient of the model.",25,null],[11,"set_coeffs","","Change a set of constant matrix coefficients of the model.",25,null],[11,"drop","","",25,null],[0,"attr","","Defines the name of attributes",null,null],[4,"IntAttr","gurobi::attr","",null,null],[13,"NumConstrs","","",11,null],[13,"NumVars","","",11,null],[13,"NumSOS","","",11,null],[13,"NumQConstrs","","",11,null],[13,"NumNZs","","",11,null],[13,"NumQNZs","","",11,null],[13,"NumQCNZs","","",11,null],[13,"NumIntVars","","",11,null],[13,"NumBinVars","","",11,null],[13,"NumPWLObjVars","","",11,null],[13,"ModelSense","","",11,null],[13,"IsMIP","","",11,null],[13,"IsQP","","",11,null],[13,"IsQCP","","",11,null],[13,"Status","","",11,null],[13,"SolCount","","",11,null],[13,"BarIterCount","","",11,null],[13,"VBasis","","",11,null],[13,"CBasis","","",11,null],[13,"PWLObjCvx","","",11,null],[13,"BranchPriority","","",11,null],[13,"VarPreStat","","",11,null],[13,"BoundVioIndex","","",11,null],[13,"BoundSVioIndex","","",11,null],[13,"ConstrVioIndex","","",11,null],[13,"ConstrSVioIndex","","",11,null],[13,"ConstrResidualIndex","","",11,null],[13,"ConstrSResidualIndex","","",11,null],[13,"DualVioIndex","","",11,null],[13,"DualSVioIndex","","",11,null],[13,"DualResidualIndex","","",11,null],[13,"DualSResidualIndex","","",11,null],[13,"ComplVioIndex","","",11,null],[13,"IntVioIndex","","",11,null],[13,"IISMinimal","","",11,null],[13,"IISLB","","",11,null],[13,"IISUB","","",11,null],[13,"IISConstr","","",11,null],[13,"IISSOS","","",11,null],[13,"IISQConstr","","",11,null],[13,"TuneResultCount","","",11,null],[13,"Lazy","","",11,null],[13,"VarHintPri","","",11,null],[4,"DoubleAttr","","",null,null],[13,"Runtime","","",13,null],[13,"ObjCon","","",13,null],[13,"LB","","",13,null],[13,"UB","","",13,null],[13,"Obj","","",13,null],[13,"Start","","",13,null],[13,"PreFixVal","","",13,null],[13,"RHS","","",13,null],[13,"QCRHS","","",13,null],[13,"MaxCoeff","","",13,null],[13,"MinCoeff","","",13,null],[13,"MaxBound","","",13,null],[13,"MinBound","","",13,null],[13,"MaxObjCoeff","","",13,null],[13,"MinObjCoeff","","",13,null],[13,"MaxRHS","","",13,null],[13,"MinRHS","","",13,null],[13,"ObjVal","","",13,null],[13,"ObjBound","","",13,null],[13,"ObjBoundC","","",13,null],[13,"MIPGap","","",13,null],[13,"IterCount","","",13,null],[13,"NodeCount","","",13,null],[13,"X","","",13,null],[13,"RC","","",13,null],[13,"Pi","","",13,null],[13,"QCPi","","",13,null],[13,"Slack","","",13,null],[13,"QCSlack","","",13,null],[13,"BoundVio","","",13,null],[13,"BoundSVio","","",13,null],[13,"BoundVioSum","","",13,null],[13,"BoundSVioSum","","",13,null],[13,"ConstrVio","","",13,null],[13,"ConstrSVio","","",13,null],[13,"ConstrVioSum","","",13,null],[13,"ConstrSVioSum","","",13,null],[13,"ConstrResidual","","",13,null],[13,"ConstrSResidual","","",13,null],[13,"ConstrResidualSum","","",13,null],[13,"ConstrSResidualSum","","",13,null],[13,"DualVio","","",13,null],[13,"DualSVio","","",13,null],[13,"DualVioSum","","",13,null],[13,"DualSVioSum","","",13,null],[13,"DualResidual","","",13,null],[13,"DualSResidual","","",13,null],[13,"DualResidualSum","","",13,null],[13,"DualSResidualSum","","",13,null],[13,"ComplVio","","",13,null],[13,"ComplVioSum","","",13,null],[13,"IntVio","","",13,null],[13,"IntVioSum","","",13,null],[13,"Kappa","","",13,null],[13,"KappaExact","","",13,null],[13,"SAObjLow","","",13,null],[13,"SAObjUp","","",13,null],[13,"SALBLow","","",13,null],[13,"SALBUp","","",13,null],[13,"SARHSLow","","",13,null],[13,"SAUBLow","","",13,null],[13,"SAUBUp","","",13,null],[13,"SARHSUp","","",13,null],[13,"Xn","","",13,null],[13,"FarkasProof","","",13,null],[13,"FarkasDual","","",13,null],[13,"UnbdRay","","",13,null],[13,"PStart","","",13,null],[13,"DStart","","",13,null],[13,"BarX","","",13,null],[13,"VarHintVal","","",13,null],[4,"CharAttr","","",null,null],[13,"VType","","",12,null],[13,"Sense","","",12,null],[13,"QCSense","","",12,null],[4,"StringAttr","","",null,null],[13,"ModelName","","",14,null],[13,"VarName","","",14,null],[13,"ConstrName","","",14,null],[13,"QCName","","",14,null],[0,"param","gurobi","Defines the name of parameters",null,null],[4,"IntParam","gurobi::param","",null,null],[13,"SolutionLimit","","",8,null],[13,"Method","","",8,null],[13,"ScaleFlag","","",8,null],[13,"SimplexPricing","","",8,null],[13,"Quad","","",8,null],[13,"NormAdjust","","",8,null],[13,"Sifting","","",8,null],[13,"SiftMethod","","",8,null],[13,"SubMIPNodes","","",8,null],[13,"VarBranch","","",8,null],[13,"Cuts","","",8,null],[13,"CliqueCuts","","",8,null],[13,"CoverCuts","","",8,null],[13,"FlowCoverCuts","","",8,null],[13,"FlowPathCuts","","",8,null],[13,"GUBCoverCuts","","",8,null],[13,"ImpliedCuts","","",8,null],[13,"MIPSepCuts","","",8,null],[13,"MIRCuts","","",8,null],[13,"ModKCuts","","",8,null],[13,"ZeroHalfCuts","","",8,null],[13,"NetworkCuts","","",8,null],[13,"SubMIPCuts","","",8,null],[13,"CutAggPasses","","",8,null],[13,"CutPasses","","",8,null],[13,"GomoryPasses","","",8,null],[13,"NodeMethod","","",8,null],[13,"Presolve","","",8,null],[13,"Aggregate","","",8,null],[13,"IISMethod","","",8,null],[13,"PreCrush","","",8,null],[13,"PreDepRow","","",8,null],[13,"PrePasses","","",8,null],[13,"DisplayInterval","","",8,null],[13,"OutputFlag","","",8,null],[13,"Threads","","",8,null],[13,"BarIterLimit","","",8,null],[13,"Crossover","","",8,null],[13,"CrossoverBasis","","",8,null],[13,"BarCorrectors","","",8,null],[13,"BarOrder","","",8,null],[13,"PumpPasses","","",8,null],[13,"RINS","","",8,null],[13,"Symmetry","","",8,null],[13,"MIPFocus","","",8,null],[13,"NumericFocus","","",8,null],[13,"AggFill","","",8,null],[13,"PreDual","","",8,null],[13,"SolutionNumber","","",8,null],[13,"MinRelNodes","","",8,null],[13,"ZeroObjNodes","","",8,null],[13,"BranchDir","","",8,null],[13,"InfUnbdInfo","","",8,null],[13,"DualReductions","","",8,null],[13,"BarHomogeneous","","",8,null],[13,"PreQLinearize","","",8,null],[13,"MIQCPMethod","","",8,null],[13,"QCPDual","","",8,null],[13,"LogToConsole","","",8,null],[13,"PreSparsify","","",8,null],[13,"PreMIQCPForm","","",8,null],[13,"Seed","","",8,null],[13,"ConcurrentMIP","","",8,null],[13,"ConcurrentJobs","","",8,null],[13,"DistributedMIPJobs","","",8,null],[13,"LazyConstraints","","",8,null],[13,"TuneResults","","",8,null],[13,"TuneTrials","","",8,null],[13,"TuneOutput","","",8,null],[13,"TuneJobs","","",8,null],[13,"Disconnected","","",8,null],[13,"NoRelHeuristic","","",8,null],[13,"UpdateMode","","",8,null],[13,"WorkerPort","","",8,null],[13,"Record","","",8,null],[4,"DoubleParam","","",null,null],[13,"Cutoff","","",9,null],[13,"IterationLimit","","",9,null],[13,"NodeLimit","","",9,null],[13,"TimeLimit","","",9,null],[13,"FeasibilityTol","","",9,null],[13,"IntFeasTol","","",9,null],[13,"MarkowitzTol","","",9,null],[13,"MIPGap","","",9,null],[13,"MIPGapAbs","","",9,null],[13,"OptimalityTol","","",9,null],[13,"PerturbValue","","",9,null],[13,"Heuristics","","",9,null],[13,"ObjScale","","",9,null],[13,"NodefileStart","","",9,null],[13,"BarConvTol","","",9,null],[13,"BarQCPConvTol","","",9,null],[13,"PSDTol","","",9,null],[13,"ImproveStartGap","","",9,null],[13,"ImproveStartNodes","","",9,null],[13,"ImproveStartTime","","",9,null],[13,"FeasRelaxBigM","","",9,null],[13,"TuneTimeLimit","","",9,null],[13,"PreSOS1BigM","","",9,null],[13,"PreSOS2BigM","","",9,null],[4,"StringParam","","",null,null],[13,"LogFile","","",10,null],[13,"NodefileDir","","",10,null],[13,"ResultFile","","",10,null],[13,"WorkerPool","","",10,null],[13,"WorkerPassword","","",10,null],[13,"Dummy","","",10,null],[6,"Result","gurobi","A specialized\n[`Result`](https://doc.rust-lang.org/std/result/enum.Result.html)\ntype for operations in Gurobi Rust API",null,null],[17,"INFINITY","","Large number used in C API",null,null]],"paths":[[4,"Error"],[4,"VarType"],[4,"ConstrSense"],[4,"ModelSense"],[4,"SOSType"],[4,"Status"],[4,"RelaxType"],[4,"Where"],[4,"IntParam"],[4,"DoubleParam"],[4,"StringParam"],[4,"IntAttr"],[4,"CharAttr"],[4,"DoubleAttr"],[4,"StringAttr"],[3,"CString"],[3,"Env"],[3,"Callback"],[3,"Proxy"],[3,"Var"],[3,"Constr"],[3,"QConstr"],[3,"SOS"],[3,"LinExpr"],[3,"QuadExpr"],[3,"Model"]]};
initSearch(searchIndex);
