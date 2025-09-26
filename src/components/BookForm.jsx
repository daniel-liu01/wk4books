function BookForm() {
    return (
        <div className='form-container'>
            <h2>Add Book</h2>
            <form>
                <div className='form-control'>
                    <label htmlFor='title' className="form-label">Title</label>
                    <input
                        type='text'
                        name='title'
                        placeholder='Book title'
                    />
                </div>
                <div className='form-control'>
                    <label htmlFor='pr-author' className="form-label">Author</label>
                    <input
                        type='text'
                        name='pr-author'
                        placeholder='Name'
                    />
                </div>
                <div className='form-control'>
                    <label htmlFor='pr-publisher' className="form-label">Publisher</label>
                    <input
                        type='text'
                        name='pr-publisher'
                        placeholder='Publisher name'
                    />
                </div>
                <div className='form-control'>
                    <label htmlFor='pr-publicationYear' className="form-label">Publication Year</label>
                    <input
                        type='text'
                        name='pr-publicationYear'
                        placeholder='Year'
                    />
                </div>
                <div className='form-control'>
                    <label htmlFor='pr-language' className="form-label">Language</label>
                    <input
                        type='text'
                        name='pr-language'
                        placeholder='Name'
                    />
                </div>
                <div className='form-control'>
                    <label htmlFor='pr-pages' className="form-label">Pages</label>
                    <input
                        type='text'
                        name='pr-pages'
                        placeholder='e.g. 235'
                    />
                </div>
                <button className='btn primary'>Save</button>
            </form>
        </div>
    );
}

export default BookForm;
