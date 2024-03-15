const GenderCheckBox = () => {
    return <div className="flex">
        <div className="form-control">
            <label className="cursor-pointer label gap-2">
                <span className="label-text text-gray-300">Male</span>
                <input type="checkbox" className="checkbox border-gray-200" />
            </label>
        </div>
        <div className="form-control">
            <label className="cursor-pointer label gap-2">
                <span className="label-text text-gray-300">Female</span>
                <input type="checkbox" className="checkbox border-gray-200" />
            </label>
        </div>
    </div>
};

export default GenderCheckBox;