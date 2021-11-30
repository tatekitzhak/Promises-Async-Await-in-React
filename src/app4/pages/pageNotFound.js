import React from 'react'

function PageNotFound() {
    
    return (
        <> 
            <div className="not_found_container">
                <div className="not_found_msg">
                    <p className="header_err">404</p>
                    <p>This page could not be found</p>
                    <p>Maybe this page moved? Got deleted? Is hiding out in quarantine? Never existed in the first place?</p>
                    <p>Let's go <a href="#">home</a> and try from there.</p>
                </div>
            </div>
        </>
    )
}
/*
<Route path="*" component={() => <PageNotFound ...props any_data={} />} />
<Route path="/404" component={() => <PageNotFound ...props any_data={} />} />
<Redirect to="/404" />
            
*/

export default PageNotFound;