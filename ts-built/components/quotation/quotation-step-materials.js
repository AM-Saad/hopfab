"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const little_state_machine_1 = require("little-state-machine");
const react_hook_form_1 = require("react-hook-form");
const stateMachineActions_1 = require("./stateMachineActions");
const right_arrow_icon_1 = require("../icons/right-arrow-icon");
const exclamation_circle_icon_1 = require("../icons/exclamation-circle-icon");
const down_left_arrow_icon_1 = require("../icons/down-left-arrow-icon");
const g_tag_1 = require("../../utilities/g-tag");
const sortItems = (state, requriedItems) => {
    let radioItems = [];
    let dropDownItems = [];
    state.data.materials.forEach(i => {
        if (requriedItems.includes(i.label)) {
            radioItems.push(i);
        }
        else {
            dropDownItems.push(i);
        }
    });
    return { radioItems, dropDownItems };
};
const QuotationStepProjectKnowHow = () => {
    const { register, handleSubmit, formState: { errors }, } = react_hook_form_1.useForm();
    const { actions, state } = little_state_machine_1.useStateMachine({ updateForm: stateMachineActions_1.updateForm, updateMeta: stateMachineActions_1.updateMeta });
    const [filteredDropDownItems, setFilteredDropDownItems] = react_1.useState([]);
    const [showDropDown, setShowDropDown] = react_1.useState(false);
    const [selectedValFromDropDown, setSelectedValFromDropDown] = react_1.useState(null);
    const onSubmit = (data) => {
        g_tag_1.analytics("event", "depot_step", {
            event_category: "engagement",
            event_label: `Dépôt de projet - savoir-faire`,
        });
        actions.updateMeta({ currentStep: state.meta.currentStep + 1 });
    };
    const renderDefultCheck = () => {
        let val = dropDownItems.find(i => i.code === state.form.materialsId);
        setTimeout(() => {
            if (val) {
                setShowDropDown(true);
                setSelectedValFromDropDown(val.label);
            }
        }, 100);
        return val && val.code;
    };
    const requriedItems = [
        "Bois",
        "Matériaux recyclés",
        "Pierre",
        "Végétaux",
        "Béton",
        "Métal",
        "plastique-resine",
        "Plastique/Résine",
        "Verre"
    ];
    const { radioItems, dropDownItems } = sortItems(state, requriedItems);
    const checkName = (name, str) => {
        let pattern = str.split("").map((x) => `(?=.*${x})`).join("");
        return name.match(new RegExp(`${pattern}`, "g"));
    };
    const searchVal = (val) => {
        actions.updateForm({ materialsId: null });
        let filtered = dropDownItems.filter((i) => i.label.toLowerCase().includes(val) || checkName(i.label.toLowerCase(), val));
        setFilteredDropDownItems(filtered);
        return setSelectedValFromDropDown(null);
    };
    const chooseFromSelection = (val, label) => {
        actions.updateForm({ materialsId: val });
        setSelectedValFromDropDown(label);
        setFilteredDropDownItems([]);
    };
    react_1.useEffect(() => {
        if (filteredDropDownItems) {
            console.log(filteredDropDownItems);
        }
    }, [filteredDropDownItems]);
    const itemsComponents = () => {
        return radioItems.map((profession, index) => (<div key={profession.code} className="rounded-md -space-y-px">
                <div className="relative py-4 flex">
                    <div className="flex items-center h-5">
                        <input id={`materialsId-option-${index}`} {...register("materialsId", {
            required: "Vous devez sélectionner une option",
        })} type="radio" className="bg-gris-800 h-8 w-8 text-gris-800 cursor-pointer border-brown-50 focus:ring-opacity-50 focus:ring-brown-50 checked:border-brown-50" value={profession.code} defaultChecked={state.form.materialsId === profession.code} onChange={e => {
                setSelectedValFromDropDown('');
                setShowDropDown(false);
                actions.updateForm({ materialsId: e.target.value });
            }}/>
                    </div>
                    <label htmlFor={`materialsId-option-${index}`} className="ml-8 flex flex-col cursor-pointer">
                        <span className="block text-xsm text-brown-50 font-bold uppercase">
                            {profession.label}
                        </span>
                    </label>
                </div>
            </div>));
    };
    return (<form onSubmit={handleSubmit(onSubmit)} className="flex-auto h-full flex flex-col">
            <div className="flex-auto pt-16">
                <div className="max-w-4xl mx-auto">
                <button onClick={() => actions.updateMeta({ currentStep: state.meta.currentStep - 1 })} type="button" className="flex items-center font-black text-xsm text-brown-50 uppercase mb-4 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-gris-800 focus-visible:ring-brown-50">
            <down_left_arrow_icon_1.default className="mr-2"/>
            <span className="mt-0.5 border-b-2 border-brown-50">Retour</span>
          </button>
                    <fieldset>
                        <legend className="font-bold text-5xl sm:text-7.5xl text-brown-50 mb-8">
                            Quel savoir-faire recherchez vous ?
            </legend>
                        <div className="grid sm:grid-cols-2 gap-x-18 mx-auto">
                            {itemsComponents()}

                            <div key="more" className="rounded-md -space-y-px">
                                <div className="relative py-4 flex">
                                    <div className="flex items-center h-5">
                                        <input id="materialsId-option-8" {...register("materialsId", {
        required: "Vous devez sélectionner une option",
    })} type="radio" className="bg-gris-800 h-8 w-8 text-gris-800 cursor-pointer border-brown-50 focus:ring-opacity-50 focus:ring-brown-50 checked:border-brown-50" value="more" defaultChecked={renderDefultCheck()} onClick={e => {
            actions.updateForm({ materialsId: null });
            setShowDropDown(true);
        }}/>
                                    </div>
                                    <label htmlFor="materialsId-option-8" className="ml-8 flex flex-col cursor-pointer">
                                        <span className="block text-xsm text-brown-50 font-bold uppercase"> Autres savoir-faire </span>
                                    </label>
                                </div>
                            </div>
                            <div className={showDropDown ? 'block' : 'hidden'}>
                                <input type="text" id="anotherOption" className={`bg-transparent text-brown-50 block w-full hide-input-spinners pr-10 ${!errors.materialsId
            ? "border-brown-50 focus:ring-brown-50 focus:border-brown-50"
            : "border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500"} disabled:opacity-50`} placeholder="" aria-describedby="professions-error" autoComplete="off" value={selectedValFromDropDown} onChange={e => searchVal(e.target.value)}/>
                                <div>
                                    <div className="rounded-md -space-y-px">
                                        <div className="">
                                            <div>
                                                <ul className={`${filteredDropDownItems.length > 0 ? "border-2 border-white p-4" : ""}`}>
                                                    {filteredDropDownItems.map((profession, index) => (<li className="block text-xsm text-brown-50 font-bold uppercase mb-5 cursor-pointer" key={profession.code} value={profession.label} onClick={e => chooseFromSelection(profession.code, profession.label)}>{profession.label}</li>))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        {errors.materialsId && (<p className="flex mt-2 text-sm text-red-600" id="materialsId-error">
                                <exclamation_circle_icon_1.default className="h-5 w-5 text-red-500 mr-2"/>{" "}
                                {errors.materialsId.message}
                            </p>)}
                    </fieldset>
                </div>
            </div>
            <div className="mt-16">
                <button type="submit" className="ml-auto flex items-center font-bold text-5xl sm:text-6xl text-brown-50 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-gris-800 focus-visible:ring-brown-50">
                    Valider <right_arrow_icon_1.default className="ml-8 w-10 sm:w-12 h-10 sm:h-12"/>
                </button>
            </div>
        </form>);
};
exports.default = QuotationStepProjectKnowHow;
