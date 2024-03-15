import { IoSearchSharp } from 'react-icons/io5';

const SearchInput = () => {
    return <form className="flex items-center gap-2">
        <input type="text" placeholder="Search..." className="input input-bordered rounded-full input-accent" />
        <button type="submit" className="btn btn-circle bg-blue-300 hover:bg-blue-300 text-white">
            <IoSearchSharp className="w-6 h-6 outline-none" />
        </button>
    </form>
};

export default SearchInput;
